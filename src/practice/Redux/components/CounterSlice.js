import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
    down: (state, action) => {
      state.value = state.value - action.payload;
    },
  },
});
export default counterSlice;
// 다음과 같이 슬라이스명.actions를 각 액션에 익스포트하면 나중에 리덕스를 편하게 쓸 수 있음
export const { up, down } = counterSlice.actions;
