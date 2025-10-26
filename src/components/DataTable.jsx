// src/components/DataTable.jsx

// 1. Terima 'props' di parameter fungsi
// Kita langsung 'destructuring' props-nya
export default function DataTable({ movies, loading, error, onMovieSelect }) {
  
  // 2. Tampilkan state LOADING (poin UTS)
  // Jika App.jsx bilang 'loading' itu 'true', tampilkan ini
  if (loading) {
    return <p>Loading...</p>;
  }
  
  // 3. Tampilkan state ERROR (poin UTS)
  // Jika App.jsx mengirim 'error', tampilkan ini
  if (error) {
    return <p>Error: {error}</p>;
  }
  
  // 4. Tampilkan jika pencarian belum dilakukan atau tidak ada hasil
  // 'movies' adalah array, jadi kita cek panjangnya
  if (movies.length === 0) {
    return <p>Silakan mulai pencarian film di atas.</p>;
  }

  // 5. Tampilkan TABEL jika ada hasil (poin UTS)
  return (
    <table border="1" style={{ width: '100%', marginTop: '20px' }}>
      <thead>
        <tr>
          {/* Sesuai soal: minimal 3 kolom */}
          <th>Poster</th>
          <th>Judul</th>
          <th>Tahun</th>
          <th>Detail (imdbID)</th>
        </tr>
      </thead>
      <tbody>
        {/* 6. Gunakan .map() (poin UTS) untuk mengubah array 'movies' menjadi baris tabel */}
        {movies.map(movie => (
          <tr 
            key={movie.imdbID} 
            // 7. Tambahkan event handling 'onClick' (poin UTS)
            // Ini akan mengirim ID film kembali ke App.jsx
            onClick={() => onMovieSelect(movie.imdbID)} 
            style={{ cursor: 'pointer' }}
          >
            <td>
              {/* OMDb kadang tidak memberi Poster, jadi kita cek dulu */}
              {movie.Poster !== "N/A" ? 
                <img src={movie.Poster} alt={movie.Title} width="50" /> : 
                "No Poster"}
            </td>
            <td>{movie.Title}</td>
            <td>{movie.Year}</td>
            <td>{movie.imdbID}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}