import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookList: [],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    saveBook: (state, action) => {
      state.bookList.push(action.payload);
    },

    removeBook: (state, action) => {
      const { bookList } = state;
      const id = action.payload;
      /* eslint-disable */
      state.bookList = bookList.filter((item) => item.id !== id);
    },
  },
});

export const { saveBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
