# UTS Pemrograman Web - Movie Database Explorer

Aplikasi React untuk mencari film menggunakan OMDb API, menampilkan detail, dan mengelola daftar favorit dengan tema "Neon Violet" kustom.

---

**Nama:** Anselmus Herpin Hasugian
**NIM:** 123140020

---

## Link Deployment

Aplikasi dapat diakses di: [https://uts-pemweb-123140020.vercel.app](https://uts-pemweb-123140020.vercel.app)

---

## Fitur

* Pencarian film berdasarkan judul, tahun, dan tipe (Movie, Series, Episode).
* Menampilkan hasil dalam tabel desktop atau daftar kartu responsif di mobile.
* Peningkatan UI/UX: *Skeleton loader* saat mencari dan *placeholder* ikon untuk poster yang hilang.
* Menampilkan detail film (plot, rating, aktor) dalam **Modal (pop-up)** saat hasil diklik.
* Daftar favorit di *sidebar* (desktop) yang juga bisa diklik untuk melihat detail.
* Tombol favorit yang **dinamis** (otomatis berubah antara "Tambah" dan "Hapus").
* **Konfirmasi** sebelum menghapus film dari favorit.
* Daftar favorit disimpan secara persisten di `localStorage`.

---

## Cara Instalasi dan Menjalankan

1.  **Clone repository:**
    ```bash
    git clone https://github.com/forkaton/uts-pemweb-123140020.git
    ```
2.  **Masuk ke direktori:**
    ```bash
    cd uts-pemweb-123140020
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Dapatkan API Key OMDb:**
    * Kunjungi [**website OMDb API**](https://www.omdbapi.com/apikey.aspx)
    * Pilih opsi "FREE" dan daftarkan email Anda.
    * Cek email Anda (termasuk folder Spam) untuk mendapatkan API Key unik Anda.

5.  **Buat file Environment:**
    * Buat file bernama `.env.local` di folder utama proyek (sejajar dengan `package.json`).

6.  **Isi file `.env.local`:**
    * Isi file tersebut dengan API Key yang baru Anda dapatkan. (Ganti `KEYOMDb` dengan key yang Anda peroleh sebelumnya).
    ```
    VITE_API_KEY=KEYOMDb
    ```
7.  **Jalankan aplikasi (mode development):**
    ```bash
    npm run dev
    ```
    Aplikasi akan berjalan di `http://localhost:5173/` (atau port lain jika 5173 terpakai).

---

## Screenshot Aplikasi

### Screenshot Desktop

**1. Halaman Utama (Hasil Pencarian Default & Layout 2 Kolom)**
![Screenshot Desktop 1](./desktop1.png)
<br>

**2. Hasil Pencarian Kustom (Attack on Titan, 2015)**
![Screenshot Desktop 2](./desktop2.png)
<br>

**3. Detail Card / Modal (Hasil Klik Pencarian)**
![Screenshot Desktop 3](./desktop3.png)
<br>

**4. Film Ditambahkan ke Favorit (Sidebar Ter-update)**
![Screenshot Desktop 4](./desktop4.png)
<br>

**5. Konfirmasi Hapus dari Daftar Favorit (Sidebar)**
![Screenshot Desktop 5](./desktop5.png)
<br>

**6. Detail Card dari Favorit (Tombol Dinamis "Hapus")**
![Screenshot Desktop 6](./desktop6.png)
<br>

---

### Screenshot Mobile

**1. Halaman Utama (Layout Tumpuk)**
<br>
<img src="./mobile1.jpg" alt="Screenshot Mobile 1" width="300"/>
<br><br>

**2. Hasil Pencarian (Layout Kartu Responsif)**
<br>
<img src="./mobile2.jpg" alt="Screenshot Mobile 2" width="300"/>
<br><br>

**3. Detail Card / Modal (Responsif)**
<br>
<img src="./mobile3.jpg" alt="Screenshot Mobile 3" width="300"/>
<br><br>

**4. Film Ditambahkan ke Favorit (Modal & Latar)**
<br>
<img src="./mobile4.jpg" alt="Screenshot Mobile 4" width="300"/>
<br><br>

**5. Konfirmasi Hapus dari Modal**
<br>
<img src="./mobile5.jpg" alt="Screenshot Mobile 5" width="300"/>
<br><br>

**6. Daftar Favorit (Grid Responsif)**
<br>
<img src="./mobile6.jpg" alt="Screenshot Mobile 6" width="300"/>
<br><br>

**7. Konfirmasi Hapus dari Kartu Favorit**
<br>
<img src="./mobile7.jpg" alt="Screenshot Mobile 7" width="300"/>
<br><br>

---

## Screenshot Console Bebas Error ataupun Issues

![Screenshot Console](./bukticonsole.png)