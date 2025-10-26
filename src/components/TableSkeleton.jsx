import './Skeleton.css'; 

export default function TableSkeleton() {
  const rows = Array.from({ length: 5 }).map((_, index) => (
    <tr key={index}>
      <td><div className="skeleton-line" style={{ width: '50px', height: '75px' }}></div></td>
      <td><div className="skeleton-line" style={{ width: '80%' }}></div></td>
      <td><div className="skeleton-line" style={{ width: '40%' }}></div></td>
    </tr>
  ));

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
        {rows}
      </tbody>
    </table>
  );
}