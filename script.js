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
const victoryModal = document.getElementById("victory-modal");

let pendingFrog = null;
let currentFrog = null;

let foundFrogs = (() => {
  const raw = JSON.parse(localStorage.getItem("foundFrogs")) || [];
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

// --- Grid ---

function renderGrid() {
  grid.innerHTML = "";

  const allFrogs = localStorage.getItem("profesapoUnlocked") ? [profesapo, ...frogs] : frogs;

  allFrogs.forEach((frog) => {
    const button = document.createElement("button");
    button.className = "frog-card";

    const rarityClass = {
      "Común": "rarity-comun",
      "Poco común": "rarity-poco-comun",
      "Rara": "rarity-rara",
      "Épica": "rarity-epica",
      "Legendaria": "rarity-legendaria",
      "Única": "rarity-unica"
    }[frog.rarity];
    if (rarityClass) button.classList.add(rarityClass);
    if (frog.special) button.classList.add("special");
    if (frog.id === 0) button.classList.add("profesapo");
    if (isFound(frog.id)) button.classList.add("found");

    button.innerHTML = `
      <span class="frog-number">#${frog.id}</span>
      <span class="frog-icon">${isFound(frog.id) ? (frog.special ? "✨" : "🐸") : "?"}</span>
    `;

    button.addEventListener("click", () => findFrog(frog));

    if (window.matchMedia("(hover: hover)").matches) {
      button.addEventListener("mouseenter", () => soundHover(isFound(frog.id), frog.special));
    }

    grid.appendChild(button);
  });
}

// --- Find & confirm ---

function findFrog(frog) {
  if (isFound(frog.id)) {
    openFrogModal(frog);
    return;
  }

  pendingFrog = frog;

  if (frog.special) {
    confirmText.textContent = `⚠️ Esta rana es diferente... ¿Registrarla en la Frogdex?`;
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
  showReporter(`✔ ${pendingFrog.name} registrada en la Frogdex.`, "success");
  soundRegister(pendingFrog.special);
  setTimeout(() => reportProgress(foundFrogs.length, pendingFrog), 3000);
  openFrogModal(pendingFrog);

  closeConfirmModal();
});

// --- Frog modal ---

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

  const imgEl = document.getElementById("frog-image");
  const spriteEl = document.getElementById("frog-sprite-profesapo");
  if (frog.image === "profesapo-sprite") {
    imgEl.style.display = "none";
    spriteEl.style.display = "block";
  } else {
    imgEl.style.display = "block";
    spriteEl.style.display = "none";
    imgEl.src = frog.image;
    imgEl.alt = frog.name;
  }

  const rarityEl = document.getElementById("frog-rarity");
  if (isFound(frog.id)) {
    rarityEl.textContent = `Rareza: ${frog.rarity}`;
    rarityEl.style.display = "block";
  } else {
    rarityEl.style.display = "none";
  }

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

document.querySelectorAll("[data-close-frog]").forEach((button) => {
  button.addEventListener("click", () => {
    frogModal.classList.add("hidden");
    soundClose();
  });
});

// --- Progress & reporter ---

function reportProgress(count, frog) {
  let messages = [];

  if (frog.special) {
    messages.push(`🛑 ALERTA: ${frog.name} ha sido registrada en la Frogdex.`);
  }

  if (count === 1) {
    messages.push("Primera rana encontrada. Todo bajo control.");
  } else if (count === 5) {
    messages.push("5 ranas. Siguen apareciendo.");
  } else if (count === 10) {
    messages.push("10 ranas encontradas. Esto no puede ser casualidad.");
  } else if (count === 25) {
    messages.push("Mitad de las ranas localizadas. ¿Quién ha hecho esto?");
  } else if (count === 40) {
    messages.push("40 ranas encontradas. La situación se nos va de las manos.");
  } else if (count === 50) {
    messages.push("Las 50 ranas han sido encontradas. Solo alguien como Jaun Gardener podría completar esta misión.");
    setTimeout(() => {
      victoryModal.classList.remove("hidden");
      soundVictory();
    }, 2800);
  }

  if (messages.length) {
    showReporter(messages.join(" "));
  }
}

const reporterLog = [];

function renderReporterLog() {
  const list = document.getElementById("reporter-log-list");
  const empty = document.getElementById("reporter-log-empty");
  list.innerHTML = "";

  if (reporterLog.length === 0) {
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";
  [...reporterLog].reverse().forEach(entry => {
    const li = document.createElement("li");
    li.className = entry.type;
    li.innerHTML = `
      <span>${entry.message}</span>
      <span class="reporter-log-time">${entry.time}</span>
    `;
    list.appendChild(li);
  });
}

document.getElementById("reporter-log-button").addEventListener("mouseenter", () => playSfx("sfx_ui_hover.wav", 3.0, 0, 1.6));
document.getElementById("reporter-log-button").addEventListener("click", () => {
  playSfx("sfx_ui_window_open.wav", 0.7);
  renderReporterLog();
  document.getElementById("reporter-log-modal").classList.remove("hidden");
});

document.getElementById("close-reporter-log").addEventListener("click", () => {
  playSfx("sfx_ui_window_close.wav", 0.7);
  document.getElementById("reporter-log-modal").classList.add("hidden");
});

function showReporter(message, type = "normal") {
  const now = new Date().toLocaleString("es-ES", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
  reporterLog.push({ message, type, time: now });

  reporterToast.classList.remove("success", "danger", "normal");
  reporterToast.classList.add(type);
  reporterMessage.textContent = message;
  reporterToast.classList.remove("hidden");

  setTimeout(() => {
    reporterToast.classList.add("hidden");
  }, 6500);
}

// --- Victory ---

document.getElementById("close-victory").addEventListener("click", () => {
  victoryModal.classList.add("hidden");
  localStorage.setItem("profesapoUnlocked", "true");
  renderGrid();
  setTimeout(() => {
    showReporter("🐸 Algo nuevo ha aparecido en la Frogdex...");
  }, 300);
});

// --- Tutorial ---

const tutorialLines = [
  "Bienvenida a la Frogdex.",
  "Alguien ha escondido 50 mini ranas por la casa.",
  "No sabemos por qué.",
  "Pero ahora es tu problema.",
  "Cuando encuentres una, regístrala aquí.",
  "Buena suerte."
];

let typewriterCancel = null;

function runTypewriter() {
  const container = document.getElementById("tutorial-lines");
  const startButton = document.getElementById("tutorial-start-button");
  const sprite = document.getElementById("tutorial-sprite");
  container.innerHTML = "";
  startButton.classList.add("hidden");

  let lineIndex = 0;
  let charsSinceLastCroak = 0;
  let activeInterval = null;
  let cancelled = false;

  typewriterCancel = () => {
    cancelled = true;
    clearInterval(activeInterval);
    sprite.classList.remove("talking");
  };

  function typeLine(text, onDone) {
    const p = document.createElement("p");
    container.appendChild(p);
    let i = 0;
    sprite.classList.add("talking");
    activeInterval = setInterval(() => {
      if (cancelled) return;
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
        clearInterval(activeInterval);
        p.classList.add("done");
        sprite.classList.remove("talking");
        onDone();
      }
    }, 38);
  }

  function nextLine() {
    if (cancelled) return;
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
    if (typewriterCancel) typewriterCancel();
    playSfx("sfx_ui_window_close.wav", 0.7);
    tutorialModal.classList.add("fading");
    setTimeout(() => {
      tutorialModal.classList.add("hidden");
      tutorialModal.classList.remove("fading");
    }, 400);
    localStorage.setItem("tutorialSeen", "true");
  });
});

// --- Reset & shortcuts ---

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

  if (e.shiftKey && e.key === "T") {
    const unfound = frogs.filter(f => !isFound(f.id)).slice(0, 10);
    unfound.forEach(f => foundFrogs.push({ id: f.id, foundAt: new Date().toISOString() }));
    saveProgress();
    updateCounter();
    renderGrid();
    showReporter(`🛠 Modo test: ${unfound.length} ranas más marcadas.`);
  }

  if (e.shiftKey && e.key === "R") {
    localStorage.clear();
    location.reload();
  }
});

// --- Init ---

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
