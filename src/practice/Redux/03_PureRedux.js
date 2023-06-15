import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

// function reducer와 let store 부분은 reducer.js파일로 떨어트려 놓을 수 있음
function reducer(체중, action) {
    if (체중 === undefined) {
        return{
            number:100,
        }
    }
    // 새로운 변수를 만드는 이유는 값의 불변성을 위해서 초기값이 필요하기 때문이다
    const new체중 = {...체중};
  if (action.type === '증가') {
    new체중.number++;
    return new체중;
  } else if (action.type === '감소') {
    new체중.number--;
    return new체중;
  } else {
    return new체중;
  }
}
let store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <Content />
      <Button />
    </Provider>
  );
}

function Content() {
  // 아래는 실행된 기능을 적용할 컴포넌트에 선언 (단, 아래처럼 state 전체를 반환하면 그러지말라고 오류가 남)
  const 꺼내온거 = useSelector((state) => state.number);
  return (
    <div>
      몸무게 : {꺼내온거} <br />
    </div>
  );
}
function Button() {
  // 아래는 기능을 실행할 컴포넌트에 선언
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: '증가' });
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          dispatch({ type: '감소' });
        }}
      >
        감소
      </button>
    </>
  );
}
