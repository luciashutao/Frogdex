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

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq, duration, type = "square", gainVal = 0.15, delay = 0) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);
  gain.gain.setValueAtTime(gainVal, audioCtx.currentTime + delay);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + delay + duration);
  osc.start(audioCtx.currentTime + delay);
  osc.stop(audioCtx.currentTime + delay + duration);
}

function soundOpen(special = false) {
  playSfx("sfx_ui_window_open.wav", 0.7);
  if (special) {
    [330, 440, 550, 660, 880].forEach((f, i) => playTone(f, 0.18, "square", 0.12, i * 0.06));
  }
}

function soundClose() {
  playSfx("sfx_ui_window_close.wav", 0.7);
}

function soundRegister(special = false) {
  playSfx("sfx_ui_click.wav", special ? 1.0 : 0.7, special ? 0.2 : 0);
}

function soundHover(found, special) {
  playSfx("sfx_ui_hover.wav", 3.0, special ? 0.15 : 0.05);
}

function soundVictory() {
  const notes = [
    [330, 0], [330, 0.1], [330, 0.2],
    [262, 0.3], [330, 0.4], [392, 0.5],
    [196, 0.75]
  ];
  notes.forEach(([freq, delay]) => playTone(freq, 0.18, "square", 0.18, delay));

  // acorde final brillante
  [523, 659, 784].forEach((f, i) => playTone(f, 0.5, "square", 0.14, 1.0 + i * 0.05));
}

function soundRemove() {
  playSfx("sfx_ui_click.wav", 0.5, 0);
}

const profesapo = {
  id: 0,
  name: "Profesapo",
  type: "Rana legendaria secreta",
  rarity: "Única",
  location: "La mazmorra entera",
  image: "images/placeholder-frog.png",
  description: "El guardián de la Frogdex. Te ha estado observando desde el principio.",
  fact: "Dice que tiene algo para ti... pero que aún no es el momento.",
  special: true
};

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
const victoryModal = document.getElementById("victory-modal");

let foundFrogs = (() => {
  const raw = JSON.parse(localStorage.getItem("foundFrogs")) || [];
  // migrar formato antiguo (array de números) al nuevo (array de objetos)
  return raw.map(entry => typeof entry === "number" ? { id: entry, foundAt: null } : entry);
})();

function isFound(id) { return foundFrogs.some(e => e.id === id); }
function getFoundAt(id) { return foundFrogs.find(e => e.id === id)?.foundAt ?? null; }

function formatFoundAt(isoString) {
  if (!isoString) return null;
  const d = new Date(isoString);
  return d.toLocaleString("es-ES", {
    day: "numeric", month: "long", year: "numeric",
    hour: "2-digit", minute: "2-digit"
  });
}

function saveProgress() {
  localStorage.setItem("foundFrogs", JSON.stringify(foundFrogs));
}

function updateCounter() {
  foundCount.textContent = foundFrogs.length;
}

function renderGrid() {
  grid.innerHTML = "";

  const allFrogs = localStorage.getItem("profesapoUnlocked") ? [profesapo, ...frogs] : frogs;

  allFrogs.forEach((frog) => {
    const button = document.createElement("button");
    button.className = "frog-card";

    if (frog.special) button.classList.add("special");
    if (frog.id === 0) button.classList.add("profesapo");
    if (isFound(frog.id)) button.classList.add("found");

    button.innerHTML = `
  <span class="frog-number">#${frog.id}</span>
  <span class="frog-icon">
    ${
      isFound(frog.id)
        ? (frog.special ? "✨" : "🐸")
        : "?"
    }
  </span>
`;

    button.addEventListener("click", () => findFrog(frog));

    if (window.matchMedia("(hover: hover)").matches) {
      button.addEventListener("mouseenter", () => soundHover(isFound(frog.id), frog.special));
    }

    grid.appendChild(button);
  });
}

//Finding a frog now also checks if it's already found, and if so, just opens the modal without asking to mark it again.
function findFrog(frog) {
  const wasAlreadyFound = isFound(frog.id);

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

  foundFrogs.push({ id: pendingFrog.id, foundAt: new Date().toISOString() });
  saveProgress();
  updateCounter();
  renderGrid();
  showReporter(`✔ Rana #${pendingFrog.id} registrada en la Frogdex.`, "success");
  soundRegister(pendingFrog.special);
  setTimeout(() => reportProgress(foundFrogs.length, pendingFrog), 3000);
  openFrogModal(pendingFrog);

  closeConfirmModal();
});

removeFrogButton.addEventListener("click", () => {
  if (!currentFrog) return;

  if (!isFound(currentFrog.id)) return;

  foundFrogs = foundFrogs.filter(e => e.id !== currentFrog.id);

  saveProgress();
  updateCounter();
  renderGrid();

  frogModal.classList.add("hidden");

  soundRemove();
  showReporter(`✖ Rana #${currentFrog.id} eliminada del registro.`, "danger");
});

function openFrogModal(frog) {
    currentFrog = frog; 

    const modalCard = document.querySelector("#frog-modal .modal-card");

    if (isFound(frog.id)) {
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

    const foundAtEl = document.getElementById("frog-found-at");
    const foundAtStr = formatFoundAt(getFoundAt(frog.id));
    foundAtEl.textContent = foundAtStr ? `Encontrada el ${foundAtStr}` : "";
    foundAtEl.style.display = foundAtStr ? "block" : "none";

    frogModal.classList.remove("hidden");
    soundOpen(frog.special);
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
    setTimeout(() => {
      victoryModal.classList.remove("hidden");
      soundVictory();
    }, 2800);
  }

  if (messages.length) {
    showReporter(messages.join(" "));
  }
}

function showReporter(message, type = "normal") {
  reporterToast.classList.remove("success", "danger", "normal");
  reporterToast.classList.add(type);

  reporterMessage.textContent = message;
  reporterToast.classList.remove("hidden");

  setTimeout(() => {
    reporterToast.classList.add("hidden");
  }, 6500);
}

document.querySelectorAll("[data-close-frog]").forEach((button) => {
  button.addEventListener("click", () => {
    frogModal.classList.add("hidden");
    soundClose();
  });
});

document.getElementById("close-victory").addEventListener("click", () => {
  victoryModal.classList.add("hidden");
  localStorage.setItem("profesapoUnlocked", "true");
  renderGrid();
  setTimeout(() => {
    showReporter("🐸 ¡Profesapo ha aparecido en el grid!");
  }, 300);
});

const sfx = {};

["benignumcroak1.ogg", "sfx_ui_hover.wav", "sfx_ui_click.wav", "sfx_ui_window_open.wav", "sfx_ui_window_close.wav"].forEach(file => {
  fetch(`sfx/${file}`)
    .then(r => r.arrayBuffer())
    .then(buf => audioCtx.decodeAudioData(buf))
    .then(decoded => { sfx[file] = decoded; });
});

function playSfx(file, volume = 1.0, pitchVariance = 0) {
  const buf = sfx[file];
  if (!buf) return;
  const src = audioCtx.createBufferSource();
  const gain = audioCtx.createGain();
  src.buffer = buf;
  src.playbackRate.value = 1 + (Math.random() - 0.5) * pitchVariance;
  gain.gain.value = volume;
  src.connect(gain);
  gain.connect(audioCtx.destination);
  src.start();
}

function playCharCroak() {
  playSfx("benignumcroak1.ogg", 0.35, 0.4);
}

const tutorialLines = [
  "Bienvenida a la Frogdex de la mazmorra.",
  "Hay 50 mini ranas escondidas.",
  "Algunas son del mundo real.",
  "Otras pertenecen a esta mazmorra.",
  "Toca una rana para registrarla y desbloquear su ficha."
];

function runTypewriter() {
  const container = document.getElementById("tutorial-lines");
  const startButton = document.getElementById("tutorial-start-button");
  const sprite = document.getElementById("tutorial-sprite");
  container.innerHTML = "";
  startButton.classList.add("hidden");

  let lineIndex = 0;
  let charsSinceLastCroak = 0;

  function typeLine(text, onDone) {
    const p = document.createElement("p");
    container.appendChild(p);
    let i = 0;
    sprite.classList.add("talking");
    const interval = setInterval(() => {
      const ch = text[i++];
      p.textContent += ch;
      if (ch !== " ") {
        charsSinceLastCroak++;
        if (charsSinceLastCroak >= 3) {
          playCharCroak();
          charsSinceLastCroak = 0;
        }
      }
      if (i >= text.length) {
        clearInterval(interval);
        p.classList.add("done");
        sprite.classList.remove("talking");
        onDone();
      }
    }, 38);
  }

  function nextLine() {
    if (lineIndex >= tutorialLines.length) {
      startButton.classList.remove("hidden");
      startButton.addEventListener("mouseenter", () => playSfx("sfx_ui_hover.wav", 3.0), { passive: true });
      startButton.addEventListener("click", () => playSfx("sfx_ui_click.wav", 0.9), { once: true });
      return;
    }
    typeLine(tutorialLines[lineIndex++], () => setTimeout(nextLine, 220));
  }

  nextLine();
}

document.querySelectorAll("[data-close-tutorial]").forEach((button) => {
  button.addEventListener("mouseenter", () => playSfx("sfx_ui_hover.wav", 3.0), { passive: true });
  button.addEventListener("click", () => {
    playSfx("sfx_ui_window_close.wav", 0.7);
    tutorialModal.classList.add("hidden");
    localStorage.setItem("tutorialSeen", "true");
  });
});

document.getElementById("reset-button").addEventListener("click", () => {
  foundFrogs = [];
  saveProgress();
  localStorage.removeItem("profesapoUnlocked");
  updateCounter();
  renderGrid();
  showReporter("El caso ha sido reiniciado. Nadie recuerda nada. Excepto yo.");
});

document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.key === "F") {
    foundFrogs = frogs.map(f => ({ id: f.id, foundAt: new Date().toISOString() }));
    saveProgress();
    updateCounter();
    renderGrid();
    showReporter("🛠 Modo test: todas las ranas marcadas.");
    reportProgress(50, frogs[frogs.length - 1]);
  }
});

if (!localStorage.getItem("tutorialSeen")) {
  tutorialModal.classList.remove("hidden");

  const tapPrompt = document.getElementById("tutorial-tap");
  tapPrompt.addEventListener("click", () => {
    audioCtx.resume().then(() => {
      tapPrompt.style.display = "none";
      runTypewriter();
    });
  }, { once: true });
}

updateCounter();
renderGrid();