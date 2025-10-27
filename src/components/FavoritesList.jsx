import { FaTrash, FaFilm } from 'react-icons/fa';

export default function FavoritesList({ favorites, onRemoveFavorite, onFavoriteSelect }) {
  return (
    <div>
      <h3>Film Favorit Saya</h3>

      {favorites.length === 0 ? (
        <p>Anda belum punya film favorit.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map(movie => (
            <div
              key={movie.imdbID}
              className="favorite-card"
              onClick={() => onFavoriteSelect(movie.imdbID)}
              style={{ cursor: 'pointer' }}
              // title dihapus dari sini
            >
              {movie.Poster !== "N/A" ? (
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                />
              ) : (
                <div className="poster-placeholder" style={{height: '180px'}}>
                  <FaFilm />
                </div>
              )}
              <p>{movie.Title}</p>
              <p className="year">({movie.Year})</p> {/* Tahun ditambahkan di sini */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (window.confirm('Yakin ingin menghapus film ini dari favorit?')) {
                    onRemoveFavorite(movie.imdbID);
                  }
                }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}
                title="Hapus dari Favorit" // Tooltip di tombol hapus tetap ada
              >
                <FaTrash />
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}