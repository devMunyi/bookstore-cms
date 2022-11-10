/* eslint-disable */
import Book from './Book';

const BooksList = ({ books }) => (
  <ul className="container pt-5 pb-5">
    {books.map((book) => (
      <Book book={book} key={book.id} />
    ))}
  </ul>
);
export default BooksList;
