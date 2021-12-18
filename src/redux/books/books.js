/* eslint-disable no-unused-vars */
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lNAKqYwGDWCLMivBOc9l/books/';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBooks = () => async (dispatch) => {
  await fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      const fetchCollection = [];
      Object.entries(data).forEach((entry) => {
        const key = entry[0];
        const value = entry[1];
        const book = { id: `${key}`, title: value[0].title, category: value[0].title };
        fetchCollection.push(book);
      });
      fetchCollection.forEach((e) => {
        dispatch({
          type: ADD_BOOK,
          payload: {
            id: e.id,
            title: e.title,
            category: e.category,
          },
        });
      });
    });
};

export const postBook = ({ id, title, category }) => async (dispatch) => {
  await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      title,
      category,
    }),
  })
    .then((res) => res.text())
    .then((data) => {
      if (data === 'Created') {
        dispatch({
          type: ADD_BOOK,
          payload: {
            id,
            title,
            category,
          },
        });
      }
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
