import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './06_counterSlice';
import nameSlice from './06_nameSlice';

const store = configureStore({
  reducer: { counter: counterSlice.reducer,
myName: nameSlice.reducer },
});
export default store;
