import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './CounterSlice';

// 툴킷에서 스토어 : 여러 슬라이스를 한데 모아놓은 곳
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
