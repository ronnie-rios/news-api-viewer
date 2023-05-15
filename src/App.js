import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNewsPage from './pages/TopNewsPage';
import CategoriesPage from './pages/CategoriesPage';
import Search from './pages/Search';
import Header from './components/Header';
import SingleNews from './pages/SingleNews';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<TopNewsPage />}/>
          <Route path='/:id' element={<SingleNews />} />
          <Route path='/categories' element={<CategoriesPage />}/>
          <Route path='/search' element={<Search />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
