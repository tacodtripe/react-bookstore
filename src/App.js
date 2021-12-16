import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import BookList from './components/bookList';
import Categories from './components/categories';

function App() {
  return (
    <div className="container">
      <div className="row align-content-center">
        <span className="col-6 col-md-4 col-lg-3 logo">Bookstore CMS</span>
        <nav className="col-6 col-md-8 row justify-content-between align-content-center">
          <div className="col-11 col-md-4 row">
            <Link className="col-6 appLink" to="/">Books</Link>
            <Link className="col-6 appLink" to="/categories">Categories</Link>
          </div>
          <i className="col-1 bi bi-person-fill" />
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
