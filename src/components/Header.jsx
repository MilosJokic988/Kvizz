import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">Veronauka Kviz</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Početna</Link>
            </li>
            {[1, 2, 3, 4, 5].map((grade) => (
              <li className="nav-item" key={grade}>
                <Link className="nav-link" to={`/grade${grade}`}>Razred {grade}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
