import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const activeClass = (params) => {
    return params.isActive ? "active-item" : "";
  };

  return (
    <header className="Header">
      <NavLink to="/" className={activeClass}>
        Home
      </NavLink>
      <ul className="nav_container">
        <li className="nav_item">
          <NavLink to="/about" className={activeClass}>
            About
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/products" className={activeClass}>
            Products
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/contact" className={activeClass}>
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="authen_container">
        <button className="btn sign-in">
          <Link to="/sign-in">Sign In</Link>
        </button>
        <button className="btn sign-up">
          <Link to="/sign-up">Sign Up</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
