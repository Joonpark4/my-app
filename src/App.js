// import logo from './logo.svg';
/* eslint-disable*/
import './App.css';
import {useState} from 'react';

// state 끌어올리기(lifting-state-up)
function AddCalulator(){
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  // useState hook의 초기값을 생략하면, 해당 state의 초기값은 undefined가 됩니다.
  // 이때, 컴포넌트가 렌더링될때 해당 state의 값이 undefinded에서 첫번째 전달인자로 지정한 값으로 설정됩니다.
  const handleNum1 = (e) =>{
    const newNum1 = parseInt(e.target.value);
    setNum1(newNum1);
  }
  const handleNum2 = (e) =>{
    const newNum2 = parseInt(e.target.value);
    setNum2(newNum2);
  }
  // 두개의 이벤트 핸들러 함수 handleNum1과 handleNum2를 정의합니다. 사용자가 두 개의 입력 필드에 입력할 때마다 호출됩니다.
  // 이 함수들은 입력 값의 문자열을 parseInt를 사용하여 정수로 반환하고,
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;

// function Header() {
  //   return (
  //     <header>
  //       <h1>
  //         <a href="/">React</a>
  //       </h1>
  //     </header>
  //   );
  // }
  
  // function Nav() {
  //   return (
  //     <nav>
  //       <ol>
  //         <li>
  //           <a href="/read/1">html</a>
  //         </li>
  //         <li>
  //           <a href="/read/2">css</a>
  //         </li>
  //         <li>
  //           <a href="/read/3">js</a>
  //         </li>
  //       </ol>
  //     </nav>
  //   );
  // }
  
  // function Article() {
  //   return (
  //     <article>
  //       <h2>Welcome</h2>
  //       Hello, WEB
  //     </article>
  //   );
  // }
  
  // function App() {
  //   return (
  //     <div className="App">
  //       <Header></Header>
  //       <Nav></Nav>
  //       <Article></Article>
  //     </div>
  //   );
  // }