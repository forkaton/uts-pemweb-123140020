export default function DataTable({ movies, loading, error, onMovieSelect }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (movies.length === 0) return null;

  return (
    <table>
      <thead>
        <tr>
          <th>Poster</th>
          <th>Judul</th>
          <th>Tahun</th>
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => (
          <tr 
            key={movie.imdbID} 
            onClick={() => onMovieSelect(movie.imdbID)} 
          >
            <td>
              {movie.Poster !== "N/A" ? 
                <img src={movie.Poster} alt={movie.Title} width="50" /> : 
                "No Poster"}
            </td>
            <td data-label="Judul">{movie.Title}</td>
            <td data-label="Tahun">{movie.Year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}