import { FaTrash, FaFilm } from 'react-icons/fa'; // Import FaFilm

export default function FavoritesList({ favorites, onRemoveFavorite }) {
  return (
    <div>
      <h3>Film Favorit Saya</h3>

      {favorites.length === 0 ? (
        <p>Anda belum punya film favorit.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map(movie => (
            <div key={movie.imdbID} className="favorite-card">
              {/* Modifikasi bagian gambar ini */}
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
              <button 
                onClick={() => onRemoveFavorite(movie.imdbID)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}
                title="Hapus dari Favorit"
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