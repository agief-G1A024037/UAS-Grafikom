/* ═══════════════════════════════════════════
   ROSÉ AR KEYCHAIN — Loading & Camera Check
   ═══════════════════════════════════════════ */

// ══════════════════════════════════════════════
// LOADING PROGRESS
// ══════════════════════════════════════════════
const loadInterval = setInterval(() => {
  state.loadProgress += Math.random() * 15;
  if (state.loadProgress > 90) state.loadProgress = 90;
  DOM.loadingBar.style.width = state.loadProgress + '%';
}, 350);

// Guard: cek apakah scene sudah loaded sebelum listener terpasang
// (bisa terjadi karena fetch() partials bersifat async)
function onSceneLoaded() {
  clearInterval(loadInterval);
  DOM.loadingBar.style.width = '100%';
  setTimeout(() => DOM.loadingScreen.classList.add('hidden'), 700);
}

if (DOM.scene.hasLoaded) {
  // Scene sudah selesai load sebelum script ini jalan → langsung eksekusi
  onSceneLoaded();
} else {
  DOM.scene.addEventListener('loaded', onSceneLoaded, { once: true });
}

// ══════════════════════════════════════════════
// CAMERA PERMISSION CHECK
// ══════════════════════════════════════════════
navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
  .then(() => {
    // Kamera OK — tidak perlu tindakan, scene sudah berjalan
  })
  .catch(() => {
    clearInterval(loadInterval);
    DOM.loadingScreen.classList.add('hidden');
    DOM.cameraError.classList.add('show');
  });
