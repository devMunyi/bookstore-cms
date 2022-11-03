import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <li className="card book-card mt-4 mb-4" key={book.id}>
    <div className="row">
      <div className="col-md-5 d-flex flex-wrap">
        <div className="div">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">{book.author}</p>

          <div className="book-card-footer">
            <button type="button" className="btn btn-outline-primary">
              Comments
            </button>
            |
            <button type="button" className="btn btn-outline-primary">
              Remove
            </button>
            |
            <button type="button" className="btn btn-outline-primary">
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-3 card-col d-flex align-items-center gap-4 flex-wrap">
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: '4px solid silver',
          }}
          className="progress-circle"
        />
        <p>
          {book.completed}
          {' '}
          Completed
        </p>
      </div>
      <div className="col-md-1 d-flex align-items-center">
        <div className="vertical-rule" />
      </div>

      <div className="col-md-3 card-col d-flex flex-column flex-wrap right-col">
        <p>Current chapter</p>
        <p className="fw-bold">{book.chapter}</p>
        <button type="button" className="btn btn-primary ">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  </li>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Book;
