import PropTypes from 'prop-types';
import './book.css';
import { useDispatch } from 'react-redux';
import { deleteBook, removeBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, category } = props;
  const dispatch = useDispatch();
  const remove = (book) => {
    dispatch(removeBook(book));
    dispatch(deleteBook(book));
  };
  return (
    <div className="col-12 col-sm-11 row bookContainer my-2 bg-to-white">
      <div className="col-4 col-md-4">
        <p className="bookGenre">{category}</p>
        <p className="bookTitle">{title}</p>
        <p className="bookAuthor pb-2">Suzanne Collins</p>
        <div className="d-flex justify-content-between w-50">
          <span className="bookAuthor pe-1">Comments</span>
          <button onClick={() => remove(id)} type="button" className="bookAuthor removeButton px-1">Remove</button>
          <span className="bookAuthor ps-1">Edit</span>
        </div>
      </div>
      <div className="col-4 col-md-4 d-flex justify-content-center border-end">
        <div className="bookProgressContainer">
          <div className="bookProgress" />
        </div>
        <div className="d-flex flex-column justify-content-center">
          <p className="progressNumber">50%</p>
          <span>Completed</span>
        </div>
      </div>
      <div className="col-4 col-md-4 row justify-content-center">
        <p className="col-10 currentChapter">CURRENT CHAPTER</p>
        <p className="col-10 ">Chapter 17</p>
        <button className="align-self-end col-10" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
