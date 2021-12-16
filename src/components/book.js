import './book.css';

export default function Book() {
  return (
    <div className="row">
      <div className="col-4 col-md-4">
        <p className="bookGenre">Action</p>
        <p className="bookTitle">The Hunger Games</p>
        <p className="bookAuthor pb-2">Suzanne Collins</p>
        <div className="d-flex justify-content-between w-50">
          <span className="bookAuthor">Comments</span>
          <span className="bookAuthor removeButton px-1">Remove</span>
          <span className="bookAuthor">Edit</span>
        </div>
      </div>
      <div className="col-4 col-md-4 d-flex">
        <div className="bookProgressContainer">
          <div className="bookProgress" />
        </div>
        <div>
          <p className="progressNumber">50%</p>
          <span>Completed</span>
        </div>
      </div>
      <div className="col-4 col-md-4">
        <p className="currentChapter">CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}
