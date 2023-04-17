import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "../src/Class/04/app.js";
// import { createStore } from "redux";
import goodsReducer from "./redux.jsx";
import stockReducer from "./stockcounter.jsx";
import rootReducer from "../src/Class/04";
import { Provider } from "react-redux";
// import { composeWithDevTools } from "redux-devtools-extension"; // 리덕스 개발자 도구
import { configureStore } from '@reduxjs/toolkit'


// const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({

})
console.log(store.getState());

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);

// 리덕스를 사용하는 애플리케이션의 실행 순서
// 애플리케이션을 시작하면 index.js가 실행되어 리덕스 스토어를 생성하고
// Provider를 사용하여 애플리케이션에 연결합니다.

// index.js에서 App.jsx 컴포넌트를 루트 요소에 렌더링합니다.

// App.jsx에서 애플리케이션의 구조와 로직을 정의하고 리덕스 스토어와 상호작용할 수 있도록 설정합니다.

// 리덕스 액션들이 발생하면, 각 리듀서에서 정의된 로직에 따라 상태가 업데이트되고, 변경된 상태가 해당하는 컴포넌트로 전달됩니다.
// 이 과정에서 react-redux의 connect 함수나 useSelector와 useDispatch 훅을 사용하여 컴포넌트와 스토어 사이의 상태 및 액션을 연결합니다.

// npm install --save redux-devtools-extension
// npm i redux react-redux

// 리덕스 툴킷이란?
// 리덕스 공식 팀에서 만든 툴입니다. 리덕스 관련된 툴이 묶여있습니다.
// 예를 들어 앞에서 설치했었던 redux-devtools-extension 등이 toolkit 안에 모두 내장되어 있습니다.
// 배우지는 않았지만 thuk(썽크), immer(이모) 등도 내장되어 있습니다.
// https://redux-toolkit.js.org/
// npm install @reduxjs/toolkit
// npm install @reduxjs/toolkit react-redux
// 가장 큰 차이점
// -액션 생성 함수가 필요 없어 졌습니다.
// ...state가 없어졌습니다
// - reducer에 있던 switch나 if문 대신 함수 형태로 변경되었습니다.