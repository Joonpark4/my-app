import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './components/StoreReduxtoolkit'
import counterSlice from './components/CounterSlice';
import {up, down} from './components/CounterSlice'


// 스토어와 슬라이스는 다른 파일로 분리할 수 있다.
// 주로 store.js 와 각각의 여러 slice.js들로 나누어 저장

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {return state.counter.value});
  return (
    <div>
      <button
        onClick={() => {
          // dispatch({ type: 'counter/down', step: 1 }); // 옛날방식, 되긴 함
          dispatch(down(2))
        }}
      >
        -
      </button>{'  '}
      {count}
      {'  '}<button
        onClick={() => {
          // dispatch({ type: 'counter/up', step: 2 });
          // 아래와 같이 하면 import를 해줄 필요 없음
          dispatch(counterSlice.actions.up(2))
        }}
      >
        +
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}
