import "./Header.scss";
import logo from "../../assets/logo/logo.png";
import { useLocation, Link } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__logo-link">
          <img
            className="header__logo-img"
            src={logo}
            alt="I Want to Help Logo"
          />
          <p className="header__logo-text"> I Want to Help</p>
        </Link>
        <ul className="header__nav">
          <li
            className={`header__nav-item ${
              splitLocation[2] === "HomePage" || splitLocation[1] === ""
                ? "header__nav-item--active"
                : ""
            }`}
          >
            <Link to="/" className="header__nav-link">
              Home
            </Link>
          </li>
          <li
            className={`header__nav-item ${
              splitLocation[1] === "AboutPage" ? "header__nav-item--active" : ""
            }`}
          >
            <Link to="/AboutPage" className="header__nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
