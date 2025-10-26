import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchForm({ onSearch }) {
  const [term, setTerm] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term, year);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Cari film (cth: Batman)"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Tahun (cth: 2008)"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        min="1888"
      />
      <button type="submit" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <FaSearch />
        Cari
      </button>
    </form>
  );
}