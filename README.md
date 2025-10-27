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

1.  Clone repository: `git clone https://github.com/forkaton/uts-pemweb-123140020.git`
2.  Masuk ke direktori: `cd uts-pemweb-123140020`
3.  Install dependencies: `npm install`
4.  Buat file `.env.local` di root folder.
5.  Isi file `.env.local` dengan API Key OMDb: `VITE_API_KEY=6908bd1f `
6.  Jalankan aplikasi: `npm run dev`

## Screenshot Aplikasi

### Screenshot Desktop

**1. Halaman Utama Movie Database Explorer versi Desktop**
![Screenshot Desktop 1](./desktop1.png)

<br>

**2. Hasil Pencarian Film Attack on Titan dengan Tahun 2015**
![Screenshot Desktop 2](./desktop2.png)
<br>

**3. Detail Card / Modal Hasil Pencarian dan Tambah ke Favorit**
![Screenshot Desktop 3](./desktop3.png)
<br>

**4. Setelah di Tambahkan ke Favorit dan disimpan ke LocalStorage**
![Screenshot Desktop 4](./desktop4.png)
<br>

**5. Konfirmasi Remove Film dari Daftar Favorit**
![Screenshot Desktop 5](./desktop5.png)
<br>

**6. Detail Card / Modal dari FavoriteList dengan Opsi Remove**
![Screenshot Desktop 6](./desktop6.png)
<br>

### Screenshot Mobile

**1. Halaman Utama Movie Database Explorer versi Mobile**
<br>
<img src="./mobile1.jpg" alt="Screenshot Mobile 1" width="300"/>
<br><br>

**2. Hasil Pencarian Demon Slayer dengan Tahun 2021**
<br>
<img src="./mobile2.jpg" alt="Screenshot Mobile 2" width="300"/>
<br><br>

**3. Detail Card / Modal Hasil Pencarian**
<br>
<img src="./mobile3.jpg" alt="Screenshot Mobile 3" width="300"/>
<br><br>

**4. Film Ditambahkan ke Favorit dan Disimpan ke LocalStorage**
<br>
<img src="./mobile4.jpg" alt="Screenshot Mobile 4" width="300"/>
<br><br>

**5. Konfirmasi Remove Film dari Daftar Favorit**
<br>
<img src="./mobile5.jpg" alt="Screenshot Mobile 5" width="300"/>
<br><br>

**6. Daftar Film Favorit pada Versi Mobile**
<br>
<img src="./mobile6.jpg" alt="Screenshot Mobile 6" width="300"/>
<br><br>

**7. Konfirmasi Remove Film dari ListFavorite**
<br>
<img src="./mobile7.jpg" alt="Screenshot Mobile 7" width="300"/>
<br><br>