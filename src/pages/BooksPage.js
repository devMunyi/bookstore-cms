import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BooksList from '../components/BooksList';
import BookInput from '../components/BookInput';

const BooksPage = () => {
  const list = [
    {
      id: uuidv4(),
      title: 'Learning React',
      author: 'Firstname lastname',
      completed: '64%',
      chapter: 'Chapter 17',
    },
    {
      id: uuidv4(),
      title: 'Learning JS',
      author: 'Firstname lastname',
      completed: '8%',
      chapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      id: uuidv4(),
      title: 'Learning Redux',
      author: 'Firstname lastname',
      completed: '0%',
      chapter: 'Introduction',
    },
  ];
  const [books] = useState(list);

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
