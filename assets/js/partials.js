/* ═══════════════════════════════════════════
   ROSÉ AR KEYCHAIN — Partials Loader
   Memuat overlay HTML lalu menjalankan app scripts
   secara berurutan agar DOM tersedia sebelum JS berjalan.
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  /**
   * Muat script secara berurutan (sequential) menggunakan Promise chain.
   * Penting: dom.js harus selesai sebelum loader.js dan ar.js berjalan.
   */
  function loadScripts(urls) {
    return urls.reduce((chain, url) => {
      return chain.then(() => new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload  = resolve;
        script.onerror = () => reject(new Error('[Partials] Gagal load: ' + url));
        document.body.appendChild(script);
      }));
    }, Promise.resolve());
  }

  // Fetch overlay HTML → inject sebelum <a-scene> → load app scripts
  fetch('partials/overlays.html')
    .then(function (res) {
      if (!res.ok) throw new Error('[Partials] HTTP ' + res.status);
      return res.text();
    })
    .then(function (html) {
      // Sisipkan semua UI overlay tepat sebelum a-scene
      const scene = document.querySelector('a-scene');
      scene.insertAdjacentHTML('beforebegin', html);

      // Load app scripts secara berurutan: dom → loader → ar
      return loadScripts([
        'assets/js/dom.js',
        'assets/js/loader.js',
        'assets/js/ar.js',
      ]);
    })
    .catch(function (err) {
      console.error('[Partials] Error:', err);
    });
})();
