/* ═══════════════════════════════════════════
   ROSÉ AR KEYCHAIN — AR Marker & Audio Logic
   ═══════════════════════════════════════════ */

// ══════════════════════════════════════════════
// AUDIO — Play
// ══════════════════════════════════════════════
function playSong() {
  if (state.isPlaying || !state.markerVisible) return;

  DOM.audio.play()
    .then(() => {
      state.isPlaying = true;
      showMusicStatus(true);
      setInstruction('🎵 NUMBER ONE GIRL ♪ sedang diputar...', 'playing');
    })
    .catch((err) => {
      console.warn('[AR] Audio diblokir browser, butuh interaksi user:', err);
      // Daftarkan ulang listener agar user bisa tap lagi
      window.addEventListener('click',      playSong, { once: true });
      window.addEventListener('touchstart', playSong, { once: true });
    });
}

// ══════════════════════════════════════════════
// MARKER EVENTS
// ══════════════════════════════════════════════
DOM.marker.addEventListener('markerFound', () => {
  state.markerVisible = true;
  DOM.markerHint.classList.add('hidden');
  setInstruction('🌹 Rosé terdeteksi! Tap layar untuk musik', 'detected');

  window.addEventListener('click',      playSong, { once: true });
  window.addEventListener('touchstart', playSong, { once: true });
});

DOM.marker.addEventListener('markerLost', () => {
  state.markerVisible = false;
  DOM.markerHint.classList.remove('hidden');
  setInstruction('✨ Arahkan kamera ke marker Rosé');

  window.removeEventListener('click',      playSong);
  window.removeEventListener('touchstart', playSong);

  if (state.isPlaying) {
    DOM.audio.pause();
    DOM.audio.currentTime = 0;
    state.isPlaying = false;
    showMusicStatus(false);
  }
});

// ══════════════════════════════════════════════
// AUDIO — Ended
// ══════════════════════════════════════════════
DOM.audio.addEventListener('ended', () => {
  state.isPlaying = false;
  showMusicStatus(false);

  if (state.markerVisible) {
    setInstruction('🔁 Tap untuk putar ulang', 'detected');
    window.addEventListener('click',      playSong, { once: true });
    window.addEventListener('touchstart', playSong, { once: true });
  }
});
