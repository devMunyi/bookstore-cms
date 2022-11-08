import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './reducers/books';
import categoryReducer from './reducers/categories';

export default configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});
