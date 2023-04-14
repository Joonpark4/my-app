import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Class/03/map.js';
// import App from './nico/practice.js';
// import App from './practice/sanghwal_delete.js';


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />)
// "App" 컴포넌트를 "home" 탭을 기본값으로 렌더링합니다
// App 컴포넌트의 속성(attribute) 중 하나로 사용
// createRoot 함수를 사용하면 애플리케이션의 초기 렌더링과 나중에 발생하는 업데이트들이 더욱 효율적으로 처리됩니다.
// home은 실제로 해당 애플리케이션에서 정의된 탭 중 하나일 필요는 없습니다.
// 이 값은 "App" 컴포넌트의 속성 중 하나로 사용




// import React from 'react';
// import ReactDom from 'react-dom'; // 구버전
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();
