// src/components/DetailCard.jsx
import { useState, useEffect } from 'react'; // Kita butuh hook ini
import axios from 'axios';

// Ambil API Key (kita butuh ini lagi di sini)
const API_KEY = import.meta.env.VITE_API_KEY;

// 1. Terima 'props' { movieId } dari App.jsx
export default function DetailCard({ movieId, onAddFavorite }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 2. Gunakan useEffect (poin UTS)
  // Kode di dalam 'useEffect' ini akan berjalan SETIAP KALI
  // nilai 'movieId' (dalam [dependency array]) berubah.
  useEffect(() => {

    // 3. Jangan lakukan apa-apa jika movieId masih null
    if (!movieId) {
      setMovie(null); // Pastikan tidak ada detail film lama yang tampil
      return; 
    }

    // 4. Buat fungsi async untuk fetch data detail
    const fetchDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        // Panggil API dengan parameter 'i' (untuk imdbID)
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`);

        if (response.data.Response === "True") {
          setMovie(response.data); // Simpan seluruh objek detail film
        } else {
          setError(response.data.Error);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail(); // Jalankan fungsi fetch-nya

  }, [movieId]); // <-- 5. Dependency Array: 'Jalankan ulang jika movieId berubah'

  // ----- Tampilan UI untuk Komponen Ini -----

  // Tampilkan state loading
  if (loading) return <p>Loading detail film...</p>;

  // Tampilkan state error
  if (error) return <p>Error: {error}</p>;

  // Tampilkan jika belum ada film yang dipilih
  if (!movie) {
    return <p>Klik salah satu film di tabel untuk melihat detailnya.</p>;
  }

  // Tampilkan CARD DETAIL jika semua sukses (poin UTS)
  return (
    <div style={{ marginTop: '20px', border: '1px solid black', padding: '10px' }}>
      <h2>{movie.Title} ({movie.Year})</h2>
      <img src={movie.Poster !== "N/A" ? movie.Poster : "No Poster"} alt={movie.Title} />
      <p><strong>Rating:</strong> {movie.imdbRating}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Aktor:</strong> {movie.Actors}</p>
      <button onClick={() => onAddFavorite(movie)}>
        Tambah ke Favorit
      </button>
      {/* Kita akan tambahkan tombol 'Favorite' di sini nanti */}
    </div>
  );
}