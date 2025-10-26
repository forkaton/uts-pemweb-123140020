// src/App.jsx
import { useState } from 'react'; // Import useState
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import DataTable from './components/DataTable';
import DetailCard from './components/DetailCard';
import FavoritesList from './components/FavoritesList';

function App() {
  // State untuk data
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  // State untuk UI
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fungsi ini akan kita kirim ke SearchForm
  const handleSearch = (searchTerm, year) => {
    console.log("Mencari:", searchTerm, "Tahun:", year);
    // Logika API akan masuk di sini nanti
  };

  return (
    <div className="App">
      <Header />
      {/* Kirim fungsi handleSearch sebagai props */}
      <SearchForm onSearch={handleSearch} />
      <DataTable />
      <DetailCard />
      <FavoritesList />
    </div>
  );
}
export default App;
