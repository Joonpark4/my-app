import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
  name: 'myName',
  initialState: { value: "Joon" },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
    back: (state, action) => {
      state.value = action.payload;
    },
  },
});
export default nameSlice;
export const { change, back } = nameSlice.actions;
