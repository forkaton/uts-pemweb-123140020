import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart, FaFilm } from 'react-icons/fa'; 

const API_KEY = import.meta.env.VITE_API_KEY;

export default function DetailCard({ movieId, onAddFavorite }) {
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

  return (
    <div className="detail-card">
      <h2>{movie.Title} ({movie.Year})</h2>
      
      <div className="detail-card-content"> 
        {/* Modifikasi bagian gambar ini */}
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
          <button onClick={() => onAddFavorite(movie)} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaHeart />
            Tambah ke Favorit
          </button>
        </div>
      </div> 
    </div>
  );
}