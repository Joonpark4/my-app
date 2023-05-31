/*eslint-disable*/
/* 
useRef가 유용한 두가지 상황 
1. 저장 공간으로써의 쓰임 
(State와 같이 저장공간으로 쓰여질 수 있으나, useState는 값이 변경되면 자동으로 리렌더링이 되며 내부 변수들이 초기화되어버린다.)
 -> Ref는 값이 변경되더라도 렌더링이 되지 않으며, 내부 변수들도 그대로 존재함
2. DOM 요소에 접근이 가능
(클릭하지 않아도 Input 요소에 자동으로 focus()를 잡고 싶을 때 사용 - 로그인 창을 열자마자 id 텍스트박스에 입력가능한 상태로 만들기)
*/
import React, { useEffect, useRef, useState } from 'react';
const App = () => {
  const [count, setCount] = useState(1);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log('렌더링 수 : ', renderCount.current);
  });

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </div>
  );

  //   const [count, setCount] = useState(0);
  //   const countRef = useRef(0);
  //   let countVar = 0;

  //   console.log('렌더링...');

  //   const increaseCountState = () => {
  //     setCount(count + 1);
  //   };
  //   const increaseCountRef = () => {
  //     countRef.current = countRef.current+1;
  //     console.log("Ref : ", countRef); // Ref는 하나의 오브젝트 {current:0}
  //   };

  //   // 일반 변수의 렌더링 숫자는 리렌더링으로는 오르지 않는다. 리렌더링이 될 경우 변수는 초기화 되기 때문
  //   const increaseVar = () => {
  //     countVar = countVar+1;
  //     console.log("Var : ", countVar); // Ref는 하나의 오브젝트 {current:0}
  //   };

  //   return (
  //     <div>
  //       <p>State : {count}</p>
  //       <p>Ref : {countRef.current} </p>
  //       <p>Var : {countVar} </p>
  //       <button onClick={increaseCountState}>State 올려</button>
  //       <button onClick={increaseCountRef}>Ref 올려</button>
  //       <button onClick={increaseVar}>Var 올려</button>
  //     </div>
  //   );
};
export default App;
