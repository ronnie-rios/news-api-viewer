import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNewsPage from "./pages/TopNewsPage";
import CategoriesPage from "./pages/CategoriesPage";
import Search from "./pages/Search";
import Header from "./components/Header";
import SingleNews from "./pages/SingleNews";
import { CountryProvider } from "./context/countrycontext";

function App() {
  return (
    <div>
      <CountryProvider>
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={<TopNewsPage />} />
            <Route path="/:id" element={<SingleNews />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Router>
      </CountryProvider>
    </div>
  );
}

export default App;
