/* ═══════════════════════════════════════════
   ROSÉ AR KEYCHAIN — DOM References & State
   ═══════════════════════════════════════════ */

'use strict';

// ── DOM References ──────────────────────────
const DOM = {
  loadingScreen : document.getElementById('loading-screen'),
  loadingBar    : document.getElementById('loading-bar'),
  cameraError   : document.getElementById('camera-error'),
  instruction   : document.getElementById('ar-instruction'),
  musicStatus   : document.getElementById('music-status'),
  markerHint    : document.getElementById('marker-hint'),
  scene         : document.querySelector('a-scene'),
  marker        : document.querySelector('#rose-marker'),
  audio         : document.querySelector('#bg-music'),
};

// ── App State ────────────────────────────────
const state = {
  isPlaying     : false,
  markerVisible : false,
  loadProgress  : 0,
};

// ── UI Helpers ───────────────────────────────
function setInstruction(text, mode = 'default') {
  // mode: 'default' | 'detected' | 'playing'
  DOM.instruction.className = mode !== 'default' ? mode : '';
  DOM.instruction.innerHTML = `<span class="dot"></span> ${text}`;
}

function showMusicStatus(visible) {
  DOM.musicStatus.classList.toggle('show', visible);
}
