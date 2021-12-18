/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import Book from './book';
import AddBookForm from './addBookForm';

export default function BookList() {
  const books = useSelector((state) => state.booksReducer);
  return (
    <main className="row justify-content-center px-1">
      {/* {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          category={book.category}
        />
      ))} */}
      {books.map((e) => (
        <Book key={e.id} id={e.id} title={e.title} category={e.category} />
      ))}
      <AddBookForm />
    </main>
  );
}
