import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// set actions constants
export const ADD_BOOK = 'add_book';
export const REMOVE_BOOK = 'remove_book';
export const RETRIEVE_BOOKS = 'retrieve_books';

/* eslint-disable */
// set intial state
const bookList = [];
const url =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TYIw75uEZKdugD202LJP/books/';

// reducer
const bookReducer = (state = bookList, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'retrieve_books/fulfilled':
      return payload.books;
    case 'add_book/fulfilled':
      return [...state, payload.books];

    case 'remove_book/fulfilled':
      return state.filter(({ id }) => id !== payload.id);

    default:
      return state;
  }
};

export const retrieveBooks = createAsyncThunk(RETRIEVE_BOOKS, async () => {
  const res = await axios.get(url);
  const resultArray = Object.entries(res.data);

  return {
    books: resultArray.map(([key, value]) => ({ ...value[0], id: key })),
  };
});

export const addBook = createAsyncThunk(ADD_BOOK, async (payload) => {
  await axios.post(url, {
    item_id: payload.id,
    title: payload.title,
    author: payload.author,
    category: payload.category,
  });

  return {
    books: payload,
  };
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  const res = await axios.delete(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TYIw75uEZKdugD202LJP/books/${id}`
  );

  return { id };
});

export default bookReducer;
