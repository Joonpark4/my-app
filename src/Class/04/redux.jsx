import React from 'react';
import {createSlice} from '@reduxjs/toolkit'

// npm i redux react-redux
// 리액트에서 리덕스 사용하기
// 액션 생성 함수

// export const addNumber = () => {
//   return { type: 'ADD' };
// };

// export const substractNumber = () => {
//   return { type: 'SUBSTRACT' };
// };

// // 초기 값
// const initialState = {
//   stock: 10, // 재고
//   goods: 1, // 구매한 개수
// };

// const goodsReducer = (state = initialState, action) => {
//   // Redux 리듀서는 애플리케이션의 상태를 변경하는 함수로,
//   // 상태와 액션을 인자로 받아 새로운 상태를 반환합니다.
//   // action : 디스패이된 액션 객체입니다.
//   // 이 객체는 액션 생성 함수에서 반환된 객체, 어떤 동작을 수행해야 하는 지를 나타낸다
//   console.log(action);
//   console.log(action.type);
//   console.log(state);
//   switch (action.type) {
//     case 'ADD':
//       return {
//         ...state,
//         stock: state.stock - 1,
//         goods: state.goods + 1,
//       };
//     // ...state : 기존 상태 객체의 모든 속성을 새로운 객체에 복사
//     case 'SUBSTRACT':
//       return {
//         ...state,
//         stock: state.stock + 1,
//         goods: state.goods - 1,
//       };
//     default:
//       return state;
//   }
// };

// export default goodsReducer;

const initialState = {
  stock : 10,
  goods : 1
}

export const counterSlice = createSlice({
  name : "counter",
  initialState,
  reducers: {
    increment: (state) =>{
      state.stock -= 1 // ...state가 없어짐
      state.goods += 1
    },
    decrement: (state) =>{
      state.stock +=1
      state.goods -=1
    }
  }
})
console.log(counterSlice)
export const {increment, decrement} = counterSlice.actions 
// console.log 로 찍어보면 알 수 있습니다
export default counterSlice.reducer // reducers처럼 s붙지 않습니다. console.log 찍어보면 됨