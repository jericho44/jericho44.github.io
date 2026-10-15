# Rico Wahyu Yudana Putra - Fullstack Engineer Portfolio

Modern, high-performance portfolio website engineered with **Vue 3**, **TypeScript**, and **Vite**, pre-configured for automated deployment to **GitHub Pages** via GitHub Actions.

![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite&logoColor=white)
![Vue 3](https://img.shields.io/badge/Vue-3.5-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222222?style=flat-square&logo=githubpages&logoColor=white)

---

## 🚀 Features

- **Rich Aesthetic Design**: Custom dark mode by default with light mode switcher, glassmorphism, glowing ambient accents, and micro-interactions.
- **Enterprise Showcase**: Highlights mission-critical systems across Manufacturing (RPA), Corporate Governance (GCG), ERP, and E-Office.
- **Interactive Project Modal**: Detailed breakdown of system objectives, client context, architecture highlights, and metrics.
- **Experience Timeline**: Career journey at PT Wonokoyo Jaya Corporindo, Energeek, Investree, and Yayasan Anak Bangsa Bisa.
- **Filterable Arsenal**: Categorized skill stacks for Backend, Frontend, Databases, DevOps, and Clean Architecture.
- **Integrated Direct Channels**: Direct WhatsApp launcher with custom inquiry message, click-to-copy email, and downloadable PDF resume.
- **Fully Automated CI/CD**: Seamless GitHub Actions workflow deploying to `https://jericho44.github.io`.

---

## 📁 Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD workflow
├── public/
│   └── Rico_Wahyu_Resume.pdf   # Downloadable PDF Resume
├── src/
│   ├── components/
│   │   ├── Navbar.vue          # Header with theme toggle & nav links
│   │   ├── HeroSection.vue     # Hero with terminal code preview & stats
│   │   ├── AboutSection.vue    # Bio & 4 Core Engineering Pillars
│   │   ├── SkillsSection.vue   # Filterable technical arsenal
│   │   ├── ProjectsSection.vue # Enterprise project cards
│   │   ├── ProjectModal.vue    # Deep-dive architecture modal
│   │   ├── ExperienceSection.vue # Career timeline with active role badge
│   │   ├── EducationSection.vue # Degree & academic credentials
│   │   ├── ContactSection.vue  # WhatsApp, email copy & inquiry form
│   │   └── Footer.vue          # Footer with back-to-top & credits
│   ├── data/
│   │   └── portfolioData.ts    # Centralized portfolio data
│   ├── types.ts                # TypeScript interfaces
│   ├── style.css               # Design system & theme tokens
│   ├── App.vue                 # Root view
│   └── main.ts                 # Vue entry point
├── index.html                  # HTML template with SEO tags & fonts
├── package.json
└── vite.config.ts              # Vite config (base: './' for GitHub Pages)
```

---

## 🛠️ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build production bundle**:
   ```bash
   npm run build
   ```

---

## 🌐 Cara Deploy ke GitHub Pages (`jericho44.github.io`)

### Langkah 1: Inisialisasi Git & Commit
Buka terminal di folder proyek ini (`c:\laragon\www\github`) dan jalankan:

```bash
git init
git add .
git commit -m "feat: initial release of fullstack portfolio"
```

### Langkah 2: Hubungkan ke Repository GitHub
Buat repository baru di akun GitHub Anda ([github.com/jericho44](https://github.com/jericho44)):
- Jika ingin URL domain langsung: buat repository dengan nama **`jericho44.github.io`**
- Pastikan repository diset sebagai **Public**.

Lalu jalankan perintah:
```bash
git branch -M main
git remote add origin https://github.com/jericho44/jericho44.github.io.git
git push -u origin main
```

### Langkah 3: Aktifkan GitHub Actions di GitHub Pages
1. Buka repository Anda di browser: `https://github.com/jericho44/jericho44.github.io`
2. Klik tab **Settings** > menu samping **Pages** (di bawah section *Code and automation*).
3. Pada bagian **Build and deployment** > **Source**, ganti pilihan dari *Deploy from a branch* menjadi **GitHub Actions**.
4. Selesai! GitHub Actions akan otomatis menjalankan workflow `.github/workflows/deploy.yml` dan mempublikasikan website Anda ke:
   👉 **`https://jericho44.github.io`**

---

## ✏️ Cara Mengubah / Menambah Data

Semua data (bio, pengalaman kerja, proyek, tech stack, kontak) tersimpan rapi dan terpusat di satu file:
👉 [`src/data/portfolioData.ts`](file:///c:/laragon/www/github/src/data/portfolioData.ts)

Cukup ubah isi data di file tersebut, lalu commit & push ke GitHub. Website akan otomatis terupdate!
