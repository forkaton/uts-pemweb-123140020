import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchForm({ onSearch }) {
  const [term, setTerm] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term, year, type); 
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Cari film (cth: Batman)"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        required
        id="movieTitle"
        name="movieTitle"
        style={{ flexGrow: 1, minWidth: '150px' }} 
      />
      <input
        type="number"
        placeholder="Tahun (cth: 2008)"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        min="1888"
        id="movieYear"
        name="movieYear"
        style={{ width: '120px' }} 
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        id="movieType"
        name="movieType"
        style={{ padding: '12px 8px', borderRadius: '8px', border: '1px solid var(--border-glow)', backgroundColor: 'var(--bg-dark-void)', color: 'var(--neon-light)' }} 
      >
        <option value="">Semua Tipe</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
      <button type="submit" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <FaSearch />
        Cari
      </button>
    </form>
  );
}