// import logo from './logo.svg';
/* eslint-disable*/
import '../css/calulator.css';
import { useState } from 'react';

// state 끌어올리기(lifting-state-up)
function AddCalulator(props) {
  // 덧셈 계산기
  return (
    // props로 num1, num2, handleNum1, handleNum2를 전달받습니다
    <div>
      <h2>더하기</h2>
      <input
        type="number"
        name="num1"
        value={props.num1}
        onChange={props.handleNum1}
      />
      <input
        type="number"
        name="num2"
        value={props.num2}
        onChange={props.handleNum2}
      />
      결과 : {props.num1 + props.num2}
    </div>
  );
}

function SubCalulater(props) {
  return (
    <div>
      <h2>빼기</h2>
      <input
        type="number"
        name="num1"
        value={props.num1}
        onChange={props.handleNum1}
      />
      <input
        type="number"
        name="num2"
        value={props.num2}
        onChange={props.handleNum2}
      />
      결과 : {props.num1 - props.num2}
    </div>
  );
}

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const handleNum1 = (e) => {
    const newNum1 = parseInt(e.target.value);
    setNum1(newNum1);
  }; // setNum1 함수를 호출하여 상태를 업데이트 합니다.
  // num1 입력값이 변경될 때마다 실행되는 이벤트 핸들러를 정의
  const handleNum2 = (e) => {
    //입력값을 정수로 변환
    const newNum2 = parseInt(e.target.value);
    setNum2(newNum2);
  };
  // num2 입력값이 변경될 때마다 실행되는 이벤트 핸들러를 정의
  return (
    // App 컴포넌트의 렌더링 결과를 정의
    <div className="App">
      <h1>계산기</h1>
      <AddCalulator
        num1={num1}
        num2={num2}
        handleNum1={handleNum1}
        handleNum2={handleNum2}
      ></AddCalulator>
      <SubCalulater
        num1={num1}
        num2={num2}
        handleNum1={handleNum1}
        handleNum2={handleNum2}
      ></SubCalulater>
    </div>
  );
}

export default App;
