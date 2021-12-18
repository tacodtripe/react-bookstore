import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import Book from './book';
import AddBookForm from './addBookForm';

export default function BookList() {
  const books = useSelector((state) => state.booksReducer);
  setTimeout(() => {
    if (books.length === 0) {
      const dispatch = useDispatch();
      dispatch(fetchBooks());
    }
  }, 1000);
  return (
    <main className="row justify-content-center px-1">
      {books.map((e) => (
        <Book key={e.id} id={e.id} title={e.title} category={e.category} />
      ))}
      <AddBookForm />
    </main>
  );
}
