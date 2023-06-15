import React from 'react';

// 아래 두가지 임포트는 기본세팅에 해당
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';

const 체중 = 100;

// 아래 두 구문은 기본세팅에 해당
function reducer(state = 체중, action) {
  return state;
}
let store = createStore(reducer);

export default function App() {
  return (
    // <div>몸무게</div>
    // 프로바이더로 반드시 <<컴포넌트>>를 감싸주어야 함 (기본 세팅)
    // 그래서 주로 index.js에서 <App/> 컴포넌트를 감싸는 것이 보통이다.
    <Provider store={store}>
      <Content />
    </Provider>
  );
}

function Content() {
  // 기능이 적용될 컴포넌트에 다음과 같은 useSelector(애로우펑션) 사용
  const 꺼내온거 = useSelector((state) => state);
  return <div>몸무게 : {꺼내온거}</div>;
}
