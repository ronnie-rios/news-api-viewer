import { BroswerRouter as Router, Routes, Route } from 'react-router-dom';
import TopNewsPage from './pages/TopNewsPage';
import CategoriesPage from './pages/CategoriesPage';
import Search from './pages/Search';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<TopNewsPage />}/>
          <Route path='/' element={<CategoriesPage />}/>
          <Route path='/' element={<Search />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
