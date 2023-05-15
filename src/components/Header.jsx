import { Link } from "react-router-dom";
import { useCountry } from "../context/countrycontext";

const Header = () => {
  const { country, toggleCountry } = useCountry();

  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <button className="btn btn-ghost normal-case text-xl">
          <Link to="/">Top News</Link>
        </button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <button onClick={toggleCountry}>
              {country === "us" ? "View Great Britain News" : "View US News"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
