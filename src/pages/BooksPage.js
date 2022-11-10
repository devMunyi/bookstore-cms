/* eslint-disable */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BooksList from '../components/BooksList';
import BookInput from '../components/BookInput';
import { retrieveBooks } from '../redux/reducers/books';

const BooksPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBooks();
  }, [dispatch]);

  const fetchBooks = async () => {
    try {
      dispatch(retrieveBooks());
    } catch (error) {
      console.log(error);
    }
  };

  const books = useSelector((state) => state.books);

  return (
    <div className="page">
      <div>
        <BooksList books={books} />
        <hr />
        <BookInput />
      </div>
    </div>
  );
};

export default BooksPage;
