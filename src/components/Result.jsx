import { Link } from 'react-router-dom';

export default function Result({ score, total }) {
  return (
    <div className="container text-center">
      <h2>Rezultat</h2>
      <p>Osvojili ste <strong>{score}</strong> od <strong>{total}</strong> poena.</p>
      <Link to="/" className="btn btn-success mt-3">Nazad na početnu</Link>
    </div>
  );
}
