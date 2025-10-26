import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import DataTable from './components/DataTable';
import DetailCard from './components/DetailCard';
import FavoritesList from './components/FavoritesList';
import Footer from './components/Footer';

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('movieFavorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('movieFavorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    handleSearch('fast', '');
  }, []);

  const handleSearch = async (term, year) => {
    setLoading(true);
    setError(null);
    setMovies([]);
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${term}&y=${year}`);
      
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setError(response.data.Error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  const handleMovieSelect = (id) => {
    setSelectedMovieId(id);
  };

  const addFavorite = (movie) => {
    if (!favorites.find(fav => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    } else {
      alert('Film ini sudah ada di favorit!');
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(fav => fav.imdbID !== id));
  };

  return (
    <div className="App">
      <Header />
      <SearchForm onSearch={handleSearch} />
      <DataTable
        movies={movies}
        loading={loading}
        error={error}
        onMovieSelect={handleMovieSelect} 
      />
      <DetailCard 
        movieId={selectedMovieId} 
        onAddFavorite={addFavorite}
      />
      <FavoritesList 
        favorites={favorites}
        onRemoveFavorite={removeFavorite}
      />
      <Footer />
    </div>
  );
}
export default App;