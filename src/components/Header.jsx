import { Link } from 'react-router-dom';
import { useCountry } from '../context/countrycontext'

const Header = () => {
  const { country, toggleCountry } = useCountry();


  return (
    <nav>
      <Link to='/'>Top News</Link>
      <Link to='/categories'>Categories</Link>
      <Link to='/search'>Search</Link>
      <button onClick={toggleCountry}>{country === "us" ? "View Great Britain News" : "View US News"}</button>
    </nav>
  )
}

export default Header