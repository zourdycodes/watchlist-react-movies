import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <i className="fas fa-film icon__film"></i>
            <Link to="/" className="link__color">
              WatchList
            </Link>
          </div>

          {/* BAR LIST */}
          <ul className="nav-links">
            <li>
              <Link to="/" className="link__color">
                Watch List
              </Link>
            </li>
            <li>
              <Link to="/watched" className="link__color">
                Watched
              </Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                <i className="fas fa-plus icon__add"></i> Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
