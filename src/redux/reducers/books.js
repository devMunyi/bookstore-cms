import { v4 as uuidv4 } from 'uuid';

// set actions constants
export const BOOK_ADDED = 'BOOK_ADDED';
export const BOOK_REMOVED = 'BOOK_REMOVED';

// set intial state
const bookList = [
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
];

// reducer
const bookReducer = (state = bookList, action) => {
  switch (action.type) {
    case BOOK_ADDED:
      return [...state, action.payload];

    case BOOK_REMOVED:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

// added book action creator
export const bookAdded = ({ actionType, actionPayload }) => ({
  type: actionType,
  payload: actionPayload,
});

// removed book action creator
export const bookRemoved = ({ actionType, actionPayload }) => ({
  type: actionType,
  payload: actionPayload,
});

export default bookReducer;
