import { useSelector } from 'react-redux';
import BooksList from '../components/BooksList';
import BookInput from '../components/BookInput';

const BooksPage = () => {
  const { books } = useSelector((state) => state);

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
