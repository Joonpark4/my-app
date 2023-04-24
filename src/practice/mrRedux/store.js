import { configureStore } from '@reduxjs/toolkit';
import wordsReducer from './wordSlice';

export default configureStore({
  reducer: {
    words: wordsReducer,
  },
});