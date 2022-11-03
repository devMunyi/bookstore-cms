const BookInput = () => (
  <form className="row g-3">
    <div className="col-md-5">
      {/* <label htmlFor="inputPassword2" className="visually-hidden">
          Password
        </label> */}
      <input
        type="text"
        className="biginput form-control"
        id="book-title"
        placeholder="Book title"
      />
    </div>
    <div className="col-md-4">
      {/* <label htmlFor="bookAuthor" className="visually-hidden">
          Password
        </label> */}
      <input
        type="text"
        className="biginput form-control"
        id="book-author"
        placeholder="Book author"
      />
    </div>
    <div className="col-md-3">
      <button type="submit" className="btn btn-primary mb-3 biginput fw-bold">
        Add Book
      </button>
    </div>
  </form>
);

export default BookInput;
