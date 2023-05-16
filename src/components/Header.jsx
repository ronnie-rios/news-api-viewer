import { Link } from "react-router-dom";
import { useCountry } from "../context/countrycontext";

const Header = () => {
  const { country, toggleCountry } = useCountry();

  return (
    <nav className="p-4 w-full top-0 left-0 right-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <p className="btn btn-ghost normal-case text-xl hover:underline pb-2">
          <Link to="/">Top News</Link>
        </p>
        <li className="block pl-3 pr-4">
          <button onClick={toggleCountry} className="bg-gray-200 p-4 rounded-lg">
            {country === "us" ? "View Great Britain News" : "View US News"}
          </button>
        </li>
        <ul className="flex flex-row font-medium ">
          <Link to="/categories">
            <li className="block pl-3 pr-4 hover:underline pb-2">Categories</li>
          </Link>
          <Link to="/search">
            <li className="block pl-3 pr-4 hover:underline pb-2">Search</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
