// import logo from './logo.svg';
/* eslint-disable*/
import './01_PureRedux.css';
import React from 'react';
import { createStore } from 'redux';
// 리액트-리덕스에는 4인방이 있음 단, connect는 오래된 문법이고 사용이 어려우니 보통 다루지 않음
import { Provider, useSelector, useDispatch, connect } from 'react-redux';
// Provider : 스테이트를 어떤 컴포넌트에 제공될 것인지에 대한 가장 바깥 울타리를 정의
// 예시) <Left1><Right1> 컴포넌트에 필요하면 그 둘을 감싸면 된다.

function reducer(currentState, action) {
  // 만약 현재 스테이트가 정의되지 않았다면 기본스테이트 값을 리턴하여 정의할 수 있다
  if (currentState === undefined) {
    return {
      number: 5,
    };
  }
  // 리덕스는 각각의 스테이트를 불변하도록 유지해야함.
  // 그래서 아래와 같이 새로운 스테이트를 만들고, 과거의 스테이트를 복사해서 넣을 수 있다.
  // 스테이트를 이용해 써먹을 땐 새로운 스테이트를 사용하고, 과거의 스테이트는 불변하도록 유지
  const newState = { ...currentState };
  if (action.type === 'PLUS') {
    newState.number++;
  }
  return newState;
}
// 스토어는 여기에 선언
const store = createStore(reducer);

export default function App() {
  return (
    <div id="container">
      <h1>Root : </h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right />
        </Provider>
      </div>
    </div>
  );
}
function Left1() {
  return (
    <div>
      <h1>Left1 : </h1>
      <Left2 />
    </div>
  );
}
function Left2() {
  console.log('2');
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3 />
    </div>
  );
}
function Left3() {
  console.log('3');
  // function f(state){
  //   return state.number
  // } 이 함수는 다음과 같이 애로우 펑션으로 가능
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left3 : {number} </h1>
    </div>
  );
}
function Right() {
  return (
    <div>
      <h1>Right : </h1>
      <Right2 />
    </div>
  );
}
function Right2() {
  return (
    <div>
      <h1>Right2 :</h1>
      <Right3 />
    </div>
  );
}
function Right3() {
  // 기능을 사용할 컴포넌트에 디스패치 선언
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3 : </h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          // 여기서 디스패치를 붙이면 리듀서로 전달
          dispatch({ type: 'PLUS' });
        }}
      ></input>
    </div>
  );
}

// export default function App() {
//   const [number,setNumber] = useState(2);
//   const [number2, setNumber2] = useState(1)
//   return (
//     <div id="container">
//       <h1>Root : {number}</h1>
//       <input type="button" value="+" onClick={()=>{
//         setNumber(number+1);
//       }} ></input>
//       {number2}
//       <button onClick={()=>{
//         setNumber2(number2+1);
//       }}>+</button>
//       <div id="grid">
//       <Left1 number={number}></Left1>
//       <Right onIncrease={()=>{
//         setNumber(number+1);
//       }} />
//       </div>
//     </div>
//   );
// }
// function Left1(Props){
//   return(
//     <div>
//       <h1>Left1 : {Props.number} </h1>
//       <Left2 number={Props.number} />
//     </div>
//   );
// }
// function Left2(Props){
//   return(
//     <div>
//       <h1>Left2 : {Props.number}</h1>
//       <Left3 number={Props.number}/>
//     </div>
//   );
// }
// function Left3(Props){
//   return(
//     <div>
//       <h1>Left3 : {Props.number}</h1>
//     </div>
//   );
// }
// function Right(Props){
//   return(
//     <div>
//       <h1>Right : </h1>
//       <Right2 onIncrease={()=>{
//         Props.onIncrease();
//       }}/>
//     </div>
//   );
// }
// function Right2(Props){
//   return(
//     <div>
//       <h1>Right2 : {Props.number}</h1>
//       <Right3 onIncrease={()=>{
//         Props.onIncrease();
//       }} />
//     </div>
//   );
// }
// function Right3(Props){
//   return(
//     <div>
//       <h1>Right3 : {Props.number}</h1>
//       <input type="button" value="+" onClick={()=>{
//         Props.onIncrease();
//       }} ></input>
//     </div>
//   );
// }

// Hello 컴포넌트에 "react"라는 이름과 "red"라는 색상을 명시적으로 전달
// App.js가 상위 컴포넌트 입니다.
// 이때 Hello 컴포넌트에 속성을 전달하고 있습니다.
// 이렇게 다른 컴포넌트를 포함하는 컴포넌트를 상위 컴포넌트라고 합니다
// 반대로, 다른 컴포넌트에 포함되어 있는 컴포넌트를 하위 컴포넌트라고 합니다.
// React에서 컴포넌트 구조는 일반적으로 상위 컴포넌트에서 하위 컴포넌트로 흐릅니다
// 상위 컴포넌트는 하위 컴포넌트를 포함하고, 하위 컴포넌트에 속성(props)를 전달합니다.
// 이러한 방식을 통해 데이터와 함수를 컴포넌트 간에 전달할 수 있습니다.
