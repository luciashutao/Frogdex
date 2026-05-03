const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const sfx = {};

["benignumcroak1.ogg", "sfx_ui_hover.wav", "sfx_ui_click.wav", "sfx_ui_window_open.wav", "sfx_ui_window_close.wav"].forEach(file => {
  fetch(`sfx/${file}`)
    .then(r => r.arrayBuffer())
    .then(buf => audioCtx.decodeAudioData(buf))
    .then(decoded => { sfx[file] = decoded; });
});

function playSfx(file, volume = 1.0, pitchVariance = 0, pitch = 1.0) {
  const buf = sfx[file];
  if (!buf) return;
  const src = audioCtx.createBufferSource();
  const gain = audioCtx.createGain();
  src.buffer = buf;
  src.playbackRate.value = pitch + (Math.random() - 0.5) * pitchVariance;
  gain.gain.value = volume;
  src.connect(gain);
  gain.connect(audioCtx.destination);
  src.start();
}

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

function playCharCroak() {
  playSfx("benignumcroak1.ogg", 0.35, 0.4);
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

function soundRemove() {
  playSfx("sfx_ui_click.wav", 0.5, 0);
}

function soundVictory() {
  const notes = [
    [330, 0], [330, 0.1], [330, 0.2],
    [262, 0.3], [330, 0.4], [392, 0.5],
    [196, 0.75]
  ];
  notes.forEach(([freq, delay]) => playTone(freq, 0.18, "square", 0.18, delay));
  [523, 659, 784].forEach((f, i) => playTone(f, 0.5, "square", 0.14, 1.0 + i * 0.05));
}
