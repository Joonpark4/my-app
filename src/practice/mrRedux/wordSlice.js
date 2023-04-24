import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  words: [],
};

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addWord: (state, action) => {
      state.words.push(action.payload);
    },
    removeWord: (state) => {
      state.words.pop();
    },
  },
});

export const { addWord, removeWord } = wordsSlice.actions;

export default wordsSlice.reducer;