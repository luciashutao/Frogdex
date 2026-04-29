const specialFrogs = [
  {
    id: 7,
    name: "Cinder",
    type: "Rana especial de la mazmorra",
    rarity: "Legendaria",
    location: "Die in the Dungeon",
    image: "images/cinder.png",
    description: "Una presencia ardiente que marca el camino.",
    fact: "Una de las protagonistas especiales de esta Frogdex.",
    special: true
  },
  {
    id: 18,
    name: "Lisver",
    type: "Rana especial de la mazmorra",
    rarity: "Legendaria",
    location: "Die in the Dungeon",
    image: "images/lisver.png",
    description: "Silenciosa, precisa y difícil de ignorar.",
    fact: "Su ficha debería sentirse elegante y misteriosa.",
    special: true
  },
  {
    id: 33,
    name: "Mango",
    type: "Rana especial de la mazmorra",
    rarity: "Legendaria",
    location: "Die in the Dungeon",
    image: "images/mango.png",
    description: "Impredecible, brillante y peligrosamente encantadora.",
    fact: "Probablemente no estaba siguiendo el plan.",
    special: true
  },
  {
    id: 47,
    name: "Nera",
    type: "Rana especial de la mazmorra",
    rarity: "Legendaria",
    location: "Die in the Dungeon",
    image: "images/nera.png",
    description: "Pupila de Cinder. Sigue sus pasos por la mazmorra.",
    fact: "Todavía hay mucho misterio alrededor de ella.",
    special: true
  }
];

const frogs = [];

for (let id = 1; id <= 50; id++) {
  const special = specialFrogs.find((frog) => frog.id === id);

  if (special) {
    frogs.push(special);
  } else {
    frogs.push({
      id,
      name: `Rana misteriosa #${id}`,
      type: "Rana del mundo",
      rarity: "Común",
      location: "Hábitat por investigar",
      image: "images/placeholder-frog.png",
      description: "Todavía falta completar la ficha de esta rana.",
      fact: "Aquí irá una curiosidad real cuando recopilemos información."
    });
  }
}

const removeFrogButton = document.getElementById("remove-frog");
const grid = document.getElementById("frog-grid");
const foundCount = document.getElementById("found-count");
const frogModal = document.getElementById("frog-modal");
const tutorialModal = document.getElementById("tutorial-modal");
const reporterToast = document.getElementById("reporter-toast");
const reporterMessage = document.getElementById("reporter-message");
const confirmModal = document.getElementById("confirm-modal");
const confirmText = document.getElementById("confirm-text");
const cancelConfirm = document.getElementById("cancel-confirm");
const acceptConfirm = document.getElementById("accept-confirm");

let pendingFrog = null;
let currentFrog = null;

let foundFrogs = JSON.parse(localStorage.getItem("foundFrogs")) || [];

function saveProgress() {
  localStorage.setItem("foundFrogs", JSON.stringify(foundFrogs));
}

function updateCounter() {
  foundCount.textContent = foundFrogs.length;
}

function renderGrid() {
  grid.innerHTML = "";

  frogs.forEach((frog) => {
    const button = document.createElement("button");
    button.className = "frog-card";

    if (frog.special) button.classList.add("special");
    if (foundFrogs.includes(frog.id)) button.classList.add("found");

    button.innerHTML = `
  <span class="frog-number">#${frog.id}</span>
  <span class="frog-icon">
    ${
      foundFrogs.includes(frog.id)
        ? (frog.special ? "✨" : "🐸")
        : "?"
    }
  </span>
`;

    button.addEventListener("click", () => findFrog(frog));
    grid.appendChild(button);
  });
}

//Finding a frog now also checks if it's already found, and if so, just opens the modal without asking to mark it again.
function findFrog(frog) {
  const wasAlreadyFound = foundFrogs.includes(frog.id);

  if (wasAlreadyFound) {
    openFrogModal(frog);
    return;
  }

  pendingFrog = frog;

  if (frog.special) {
    confirmText.textContent = `⚠️ Esta rana es diferente... ¿Registrar a ${frog.name}?`;
  } else {
    confirmText.textContent = `¿Quieres registrar la rana #${frog.id} en la Frogdex?`;
  }

  confirmModal.classList.remove("hidden");
}

function closeConfirmModal() {
  pendingFrog = null;
  confirmModal.classList.add("hidden");
}

cancelConfirm.addEventListener("click", closeConfirmModal);

acceptConfirm.addEventListener("click", () => {
  if (!pendingFrog) return;

  foundFrogs.push(pendingFrog.id);
  saveProgress();
  updateCounter();
  renderGrid();
  reportProgress(foundFrogs.length, pendingFrog);
  openFrogModal(pendingFrog);

  closeConfirmModal();
});

removeFrogButton.addEventListener("click", () => {
  if (!currentFrog) return;

  if (!foundFrogs.includes(currentFrog.id)) return;

  foundFrogs = foundFrogs.filter(id => id !== currentFrog.id);

  saveProgress();
  updateCounter();
  renderGrid();

  frogModal.classList.add("hidden");

  showReporter("Corrección realizada. La rana ha sido eliminada del registro.");
});

function openFrogModal(frog) {
    currentFrog = frog; // 🔥 ESTO ES CLAVE

    const modalCard = document.querySelector("#frog-modal .modal-card");

    if (foundFrogs.includes(frog.id)) {
        removeFrogButton.textContent = "Quitar rana";
        removeFrogButton.disabled = false;
    } else {
        removeFrogButton.textContent = "No registrada";
        removeFrogButton.disabled = true;
    }
    if (frog.special) {
        modalCard.classList.add("special");
    } else {
        modalCard.classList.remove("special");
    }

    document.getElementById("frog-image").src = frog.image;
    document.getElementById("frog-image").alt = frog.name;
    document.getElementById("frog-rarity").textContent = `Rareza: ${frog.rarity}`;
    document.getElementById("frog-name").textContent = frog.name;
    document.getElementById("frog-type").textContent = `Tipo: ${frog.type}`;
    document.getElementById("frog-location").textContent = `Vive en: ${frog.location}`;
    document.getElementById("frog-description").textContent = frog.description;
    document.getElementById("frog-fact").textContent = `Dato: ${frog.fact}`;

    frogModal.classList.remove("hidden");
}

function reportProgress(count, frog) {
  let messages = [];

  if (frog.special) {
    messages.push(`🛑 ALERTA: ${frog.name} ha sido registrada en la Frogdex.`);
  }

  if (count === 1) {
    messages.push("Primera rana encontrada.");
  } else if (count === 5) {
    messages.push("Ya van 5 ranas.");
  } else if (count === 10) {
    messages.push("10 ranas localizadas.");
  } else if (count === 25) {
    messages.push("Mitad del caso resuelta.");
  } else if (count === 40) {
    messages.push("40 ranas encontradas.");
  } else if (count === 50) {
    messages.push("Las 50 ranas han sido encontradas.");
  }

  if (messages.length) {
    showReporter(messages.join(" "));
  }
}

function showReporter(message) {
  reporterMessage.textContent = message;
  reporterToast.classList.remove("hidden");

  setTimeout(() => {
    reporterToast.classList.add("hidden");
  }, 4500);
}

document.querySelectorAll("[data-close-frog]").forEach((button) => {
  button.addEventListener("click", () => frogModal.classList.add("hidden"));
});

document.querySelectorAll("[data-close-tutorial]").forEach((button) => {
  button.addEventListener("click", () => {
    tutorialModal.classList.add("hidden");
    localStorage.setItem("tutorialSeen", "true");
  });
});

document.getElementById("reset-button").addEventListener("click", () => {
  foundFrogs = [];
  saveProgress();
  updateCounter();
  renderGrid();
  showReporter("El caso ha sido reiniciado. Nadie recuerda nada. Excepto yo.");
});

if (!localStorage.getItem("tutorialSeen")) {
  tutorialModal.classList.remove("hidden");
}

updateCounter();
renderGrid();