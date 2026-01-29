# Website Teater Bara

Website **Teater Bara** adalah website profil dan galeri yang dibangun menggunakan **React + TypeScript** dengan **SCSS Module**. Website ini menampilkan identitas kelompok teater, dokumentasi kegiatan, serta pengalaman visual modern melalui animasi, video intro, dan sistem section observer.

---

## Teknologi yang Digunakan

* **React** (Vite / CRA)
* **TypeScript**
* **SCSS Module**
* **Intersection Observer API**

---

## Alur Tampilan Halaman

1. **VideoIntro**

   * Ditampilkan pertama kali saat website dibuka
   * Setelah selesai, konten utama akan muncul

2. **Hero Section**

   * Baru muncul setelah VideoIntro selesai
   * Terintegrasi dengan `useSectionObserver`

3. **Section Lainnya**

   * About
   * Gallery
   * Achievement
   * Footer

---

## useSectionObserver

Hook ini digunakan untuk:

* Mendeteksi section yang sedang terlihat di viewport
* Mengatur animasi masuk section
* Mengontrol highlight navbar

### Contoh penggunaan:

```tsx
const { ref, isVisible } = useSectionObserver();

<section ref={ref} className={isVisible ? styles.show : styles.hidden}>
```

---

## Cara Menjalankan Project

```bash
npm install
npm run dev
```

Atau jika production build:

```bash
npm run build
npm run preview
```

---

> "Teater bukan sekadar panggung, tapi ruang hidup gagasan."
