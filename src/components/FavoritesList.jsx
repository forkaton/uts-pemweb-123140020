import { FaTrash } from 'react-icons/fa';

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
              <img 
                src={movie.Poster !== "N/A" ? movie.Poster : "No Poster"} 
                alt={movie.Title} 
              />
              <p>{movie.Title}</p>
              <button onClick={() => onRemoveFavorite(movie.imdbID)}>
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}