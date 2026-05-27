# 🌹 Rosé AR Keychain

Pengalaman Augmented Reality interaktif berbasis web — scan marker Rosé dan nikmati lagu **NUMBER ONE GIRL** langsung di browser HP kamu!

## 🗂️ Struktur Proyek

```
AR_Grafikom/
├── index.html              ← Halaman utama AR
├── marker-rose.patt        ← File pattern marker AR.js
├── rose.jpg                ← Gambar yang tampil saat marker terdeteksi
├── number-one-girl.mp3     ← Audio yang diputar saat tap layar
├── .nojekyll               ← Wajib untuk GitHub Pages
├── assets/
│   ├── css/
│   │   └── style.css       ← Semua styling UI
│   └── js/
│       └── app.js          ← Semua logika AR & audio
└── README.md
```

## ✨ Fitur

- 📷 **Marker-based AR** — Deteksi pola marker menggunakan AR.js
- 🎵 **Audio interaktif** — Tap layar setelah marker terdeteksi untuk memutar musik
- 🌹 **Animasi masuk/keluar** — Gambar Rosé muncul dengan efek spring
- 💡 **Glow + ring efek** — Lingkaran neon pink berputar di bawah gambar
- 📱 **Mobile-first** — Dioptimalkan untuk HP dengan semua meta tag lengkap
- ⚡ **Loading screen** — Progress bar saat AR.js sedang inisialisasi
- ❌ **Error handling** — Layar khusus jika kamera tidak bisa diakses

## 🚀 Cara Deploy ke GitHub Pages

### 1. Buat Repository di GitHub
```
Nama repo bebas, misal: rose-ar-keychain
Visibility: Public
```

### 2. Push semua file
```bash
git init
git add .
git commit -m "🌹 Initial commit - Rosé AR Keychain"
git branch -M main
git remote add origin https://github.com/USERNAME/rose-ar-keychain.git
git push -u origin main
```

### 3. Aktifkan GitHub Pages
```
Repository → Settings → Pages
Source: Deploy from a branch
Branch: main / (root)
→ Save
```

### 4. Akses URL
```
https://USERNAME.github.io/rose-ar-keychain/
```
> ⚠️ GitHub Pages otomatis pakai HTTPS — kamera akan bisa diakses!

---

## 🧪 Cara Test Tanpa Cetak Marker

Kamu **TIDAK perlu mencetak** marker terlebih dahulu. Cukup:

1. **Buka file `marker-rose.patt`** — lihat gambar marker aslinya
2. **Tampilkan gambar marker di layar laptop / HP kedua**
3. **Scan menggunakan HP lain** yang membuka URL GitHub Pages
4. AR akan berjalan normal — AR.js bisa baca marker dari layar digital!

> 💡 Pastikan layar cukup terang dan marker tidak terlalu kecil (minimal ~8cm di layar)

---

## 🛠️ Teknologi

| Library | Versi | Fungsi |
|---------|-------|--------|
| [A-Frame](https://aframe.io) | 1.3.0 | Engine 3D/WebGL |
| [AR.js](https://ar-js-org.github.io/AR.js/) | 3.4.5 | Marker tracking |
| Vanilla CSS | — | Styling UI |
| Vanilla JS | — | Logic interaksi |

> Tidak butuh Node.js, React, atau build tool — langsung jalan di browser!

---

## ⚠️ Syarat Menjalankan

- Browser modern (Chrome, Firefox, Safari)
- **Akses kamera diizinkan**
- Dibuka via **HTTPS** atau **localhost** (bukan `file://`)
