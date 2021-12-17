import Book from './book';
import AddBookForm from './addBookForm';

export default function BookList() {
  return (
    <main className="row justify-content-center px-1">
      <Book />
      <Book />
      <AddBookForm />
    </main>
  );
}
