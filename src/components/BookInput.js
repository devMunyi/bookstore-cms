import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { addBook } from '../redux/reducers/books';

const BookInput = () => {
  const [bookInputs, setBookInputs] = useState({ title: '', author: '' });

  const handleInputChange = (e) => {
    setBookInputs({
      ...bookInputs,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const { title, author } = bookInputs;
  const saveBook = (e) => {
    e.preventDefault();

    if (title.trim().length > 0 && author.trim().length > 0) {
      const book = {
        id: uuidV4(),
        title,
        author,
        category: 'Fiction',
      };

      dispatch(addBook(book));

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
          onClick={saveBook}
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
