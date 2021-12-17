import './book.css';

export default function Book() {
  return (
    <div className="col-12 col-sm-11 row bookContainer my-2 bg-to-white">
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
}
