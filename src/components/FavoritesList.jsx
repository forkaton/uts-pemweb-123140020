// src/components/FavoritesList.jsx

// 1. Terima 'favorites' dan 'onRemoveFavorite' dari props
export default function FavoritesList({ favorites, onRemoveFavorite }) {
  return (
    <div style={{ marginTop: '30px', borderTop: '2px solid #eee', paddingTop: '20px' }}>
      <h3>Film Favorit Saya</h3>

      {/* 2. Tampilkan pesan jika favorit kosong */}
      {favorites.length === 0 ? (
        <p>Anda belum punya film favorit.</p>
      ) : (

        // 3. Terapkan GRID LAYOUT (Poin UTS)
        <div style={{ 
          display: 'grid', 
          // Buat kolom otomatis (min 150px), responsif
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
          gap: '15px' 
        }}>

          {/* 4. Loop (map) array 'favorites' */}
          {favorites.map(movie => (
            <div key={movie.imdbID} style={{ border: '1px solid gray', padding: '10px', textAlign: 'center' }}>
              <img 
                src={movie.Poster !== "N/A" ? movie.Poster : "No Poster"} 
                alt={movie.Title} 
                style={{ width: '100%', height: '180px', objectFit: 'cover' }} 
              />
              <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{movie.Title}</p>

              {/* 5. Tombol Hapus */}
              <button onClick={() => onRemoveFavorite(movie.imdbID)}>
                Hapus
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}