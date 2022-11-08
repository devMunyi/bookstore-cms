/* eslint-disable */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { saveBook } from '../redux/reducers/books';

const BookInput = () => {
  const [bookInputs, setBookInputs] = useState({ title: '', author: '' });

  const handleInputChange = (e) => {
    setBookInputs({
      ...bookInputs,
      [e.target.name]: e.target.value,
    });
  };

  // const bookList = useSelector((state) => state.book.bookList);
  const dispatch = useDispatch();

  const { title, author } = bookInputs;
  const addBook = (e) => {
    e.preventDefault();

    if (title.trim().length > 0 && author.trim().length > 0) {
      const payload = {
        id: uuidV4(),
        title,
        author,
        completed: '0%',
      };

      dispatch(saveBook(payload));

      // clear inputs
      setBookInputs({ author: '', title: '' });

      toast.success('Book Added successfully');
    } else {
      Swal.fire('Error', 'Please fill both title and author inputs', 'error');
    }
  };
  return (
    <form className="row g-3">
      <div className="col-md-5">
        {/* <label htmlFor="inputPassword2" className="visually-hidden">
          Password
        </label> */}
        <input
          type="text"
          name="title"
          className="biginput form-control"
          id="book-title"
          placeholder="Book title"
          value={bookInputs.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="col-md-4">
        {/* <label htmlFor="bookAuthor" className="visually-hidden">
          Password
        </label> */}
        <input
          type="text"
          name="author"
          className="biginput form-control"
          id="book-author"
          placeholder="Book author"
          value={bookInputs.author}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="col-md-3">
        <button
          onClick={addBook}
          type="submit"
          className="btn btn-primary mb-3 biginput fw-bold"
        >
          Add Book
        </button>
      </div>
    </form>
  );
};

export default BookInput;
