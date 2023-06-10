import { Link, useLocation } from "react-router-dom";

export default function Header({ handleSearch }) {
    const location = useLocation();

  const onSearch = (word) => {
    handleSearch(word);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* <Link to="/movies" className={`navbar-brand ${location.pathname === '/movies'?"active":""}`}>
            Home
          </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/movies"
                  className={`nav-link ${location.pathname === '/movies' ? 'active':""}`}
                  aria-current="page"
                >
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pricing" className={`nav-link ${location.pathname === '/pricing'?'active':""}`}>
                  Pricing
                </Link>
              </li>
            </ul>
            <div className="d-flex justify-content-start align-items-center">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
