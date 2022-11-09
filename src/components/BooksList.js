/* eslint-disable */
import Book from './Book';

const BooksList = ({ books }) => {
  console.log(books);
  return (
    <ul className="container pt-5 pb-5">
      {books.map((book) => (
        <Book book={book} key={book.item_id} />
      ))}
    </ul>
  );
};

export default BooksList;
