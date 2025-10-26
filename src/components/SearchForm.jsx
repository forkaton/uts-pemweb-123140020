// src/components/SearchForm.jsx
import { useState } from 'react';

// Terima props 'onSearch' dari App.jsx
export default function SearchForm({ onSearch }) {
  const [term, setTerm] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah refresh halaman
    onSearch(term, year); // Kirim data ke App.jsx
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <input
        type="text"
        placeholder="Cari film (cth: Batman)"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        required // Validasi HTML5
      />
      <input
        type="number"
        placeholder="Tahun (cth: 2008)"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        min="1888" // Validasi HTML5
      />
      <button type="submit">Cari</button>
    </form>
  );
}