/* eslint-disable */
import { PropTypes } from 'prop-types';
import Book from './Book';

const BooksList = ({ books }) => {
  return (
    <ul className="container pt-5 pb-5">
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
    </ul>
  );
};
BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default BooksList;
