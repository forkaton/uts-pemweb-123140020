export default function DataTable({ movies, loading, error, onMovieSelect }) {
  
  if (loading) {
    return <p>Loading...</p>;
  }
  
  if (error) {
    return <p>Error: {error}</p>;
  }
  
  if (movies.length === 0) {
    return <p>Silakan mulai pencarian film di atas.</p>;
  }

  // HAPUS 'border' dan 'style' dari <table>
  return (
    <table>
      <thead>
        <tr>
          <th>Poster</th>
          <th>Judul</th>
          <th>Tahun</th>
          <th>Detail (imdbID)</th>
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => (
          // HAPUS 'style' dari <tr>
          <tr 
            key={movie.imdbID} 
            onClick={() => onMovieSelect(movie.imdbID)} 
          >
            <td>
              {movie.Poster !== "N/A" ? 
                <img src={movie.Poster} alt={movie.Title} width="50" /> : 
                "No Poster"}
            </td>
            <td>{movie.Title}</td>
            <td>{movie.Year}</td>
            <td>{movie.imdbID}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}