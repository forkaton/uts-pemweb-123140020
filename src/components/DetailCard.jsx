import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart, FaFilm, FaTrash } from 'react-icons/fa'; // Import FaTrash

const API_KEY = import.meta.env.VITE_API_KEY;

export default function DetailCard({ movieId, onAddFavorite, onRemoveFavorite, favorites }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) {
      setMovie(null);
      return; 
    }

    const fetchDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`);
        if (response.data.Response === "True") {
          setMovie(response.data);
        } else {
          setError(response.data.Error);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [movieId]);

  if (loading) return <p>Loading detail film...</p>;
  if (error) return <p>Error: {error}</p>;
  
  if (!movie) {
    return null;
  }

  const isFavorite = favorites.some(fav => fav.imdbID === movie.imdbID);

  return (
    <div className="detail-card">
      <h2>{movie.Title} ({movie.Year})</h2>
      
      <div className="detail-card-content"> 
        {movie.Poster !== "N/A" ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="poster-placeholder" style={{width: '150px', height: '220px'}}>
             <FaFilm />
          </div>
        )}
        
        <div> 
          <p><strong>Rating:</strong> {movie.imdbRating}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Aktor:</strong> {movie.Actors}</p>
          
          {isFavorite ? (
            <button 
              onClick={() => {
                 if (window.confirm('Yakin hapus dari favorit?')) {
                   onRemoveFavorite(movie.imdbID);
                 }
              }} 
              className="remove-button" 
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <FaTrash /> Hapus dari Favorit
            </button>
          ) : (
            <button 
              onClick={() => onAddFavorite(movie)} 
              className="add-button" 
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <FaHeart /> Tambah ke Favorit
            </button>
          )}
        </div>
      </div> 
    </div>
  );
}