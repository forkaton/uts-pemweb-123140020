import { useState, useEffect } from 'react';
import axios from 'axios'; // <-- BARIS BARU
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import DataTable from './components/DataTable';
import DetailCard from './components/DetailCard';
import FavoritesList from './components/FavoritesList';

// Ambil API Key dari .env
const API_KEY = import.meta.env.VITE_API_KEY; // <-- BARIS BARU

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // 1. Inisialisasi 'favorites' dari localStorage
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('movieFavorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // 2. useEffect untuk MENYIMPAN ke localStorage setiap 'favorites' berubah
  useEffect(() => {
    localStorage.setItem('movieFavorites', JSON.stringify(favorites));
  }, [favorites]); // "Awasi" variabel favorites

  // Fungsi handleSearch diisi dengan logika API
  const handleSearch = async (term, year) => { // <-- FUNGSI INI DIUBAH
    setLoading(true);
    setError(null);
    setMovies([]);
    try {
      // OMDb menggunakan parameter 's' (search), 'y' (year)
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${term}&y=${year}`);
      
      if (response.data.Response === "True") {
        setMovies(response.data.Search); // data.Search adalah array film
      } else {
        setError(response.data.Error); // Tampilkan pesan error dari API
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  // Fungsi untuk menyimpan ID film yg diklik
  const handleMovieSelect = (id) => { // <-- FUNGSI BARU
    setSelectedMovieId(id);
  };

  const addFavorite = (movie) => {
    // Cek agar tidak duplikat
    if (!favorites.find(fav => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    } else {
      alert('Film ini sudah ada di favorit!');
    }
  };

  // 4. Fungsi untuk menghapus favorit
  const removeFavorite = (id) => {
    setFavorites(favorites.filter(fav => fav.imdbID !== id));
  };

  return (
    <div className="App">
      <Header />
      <SearchForm onSearch={handleSearch} />
      
      {/* Kirim state & props ke DataTable */}
      <DataTable // <-- BARIS INI DIUBAH
        movies={movies}
        loading={loading}
        error={error}
        onMovieSelect={handleMovieSelect} 
      />
      
      <DetailCard 
        movieId={selectedMovieId} 
        onAddFavorite={addFavorite} // <-- TAMBAHKAN PROPS INI
      />
      <FavoritesList 
        favorites={favorites} // <-- TAMBAHKAN PROPS INI
        onRemoveFavorite={removeFavorite} // <-- TAMBAHKAN PROPS INI
      />
    </div>
  );
}
export default App;