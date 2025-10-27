# UTS Pemrograman Web - Movie Database Explorer

Aplikasi React untuk mencari film menggunakan OMDb API.

**Nama:** Anselmus Herpin Hasugian
**NIM:** 123140020

## Link Deployment

Aplikasi dapat diakses di: [https://uts-pemweb-123140020.vercel.app]

## Fitur

* Pencarian film berdasarkan judul dan tahun.
* Menampilkan hasil dalam tabel yang responsif.
* Menampilkan detail film saat hasil diklik.
* Menambahkan dan menghapus film dari daftar favorit.
* Daftar favorit disimpan di `localStorage` (tidak hilang saat refresh).

## Cara Instalasi

1.  Clone repository: `git clone https://github.com/NAMA_ANDA/uts-pemweb-123140020.git`
2.  Masuk ke direktori: `cd uts-pemweb-123140020`
3.  Install dependencies: `npm install`
4.  Buat file `.env.local` di root folder.
5.  Isi file `.env.local` dengan API Key OMDb: `VITE_API_KEY=6908bd1f `
6.  Jalankan aplikasi: `npm run dev`

## Screenshot Aplikasi

### Screenshot Desktop
1. Halaman Utama Movie Database Exploler versi Desktop
![Screenshot Desktop 1](./desktop1.png)
2. Hasil Pencarian Film Attack on Titan dengan Tahun 2015
![Screenshot Desktop 2](./desktop2.png)
3. Detail Card / Modal Hasil Pencarian dan Tambah ke Favorit
![Screenshot Desktop 3](./desktop3.png)
4. Setelah di Tambahkan ke Favorit dan disimpan ke Localstorage 
![Screenshot Desktop 4](./desktop4.png)
5. Setelah di Tambahkan ke Favorit, Film dapat diremove dan ada Konfirmasi untuk Remove
![Screenshot Desktop 5](./desktop5.png)
6. Detail Card / Modal dapat dibuka dari Favoritelist dan dapat di Remove dari FavoriteList
![Screenshot Desktop 6](./desktop6.png)

### Screenshot Mobile
1. Halaman Utama Movie Database Exploler versi Mobile
![Screenshot Mobile 1](./mobile1.jpg)
2. Hasil Pencarian Demon Slayer dengan Tahun 2021
![Screenshot Mobile 2](./mobile2.jpg)
3. Detail Card / Modal Hasil Pencarian
![Screenshot Mobile 3](./mobile3.jpg)
4. Film ditambahkan ke Favorit dan disimpan ke Localstorage (Dapat di Remove)
![Screenshot Mobile 4](./mobile4.jpg)
5. Film yang telah ditambahkan ke Listfavorite dapat di Remove dan Harus dikonfirmasi Terlebih Dahulu
![Screenshot Mobile 5](./mobile5.jpg)
6. Film yang telah ditambahkan ke Listfavorite Berada dipaling Bawah untuk versi Mobile
![Screenshot Mobile 6](./mobile6.jpg)
7. Film dapat di Remove dari ListFavorite dan Harus dikonfirmasi Terlebih Dahulu
![Screenshot Mobile 7](./mobile7.jpg)