/*eslint-disable*/
/* 
useRef가 유용한 두가지 상황 
1. 저장 공간으로써의 쓰임 
(State와 같이 저장공간으로 쓰여질 수 있으나, useState는 값이 변경되면 자동으로 리렌더링이 되며 내부 변수들이 초기화되어버린다.)
 -> Ref는 값이 변경되더라도 렌더링이 되지 않으며, 내부 변수들도 그대로 존재함
2. DOM 요소에 접근이 가능
(클릭하지 않아도 Input 요소에 자동으로 focus()를 잡고 싶을 때 사용 - 로그인 창을 열자마자 id 텍스트박스에 입력가능한 상태로 만들기)
  -> focus를 잡고 싶은 오브젝트에 ref={ref변수명} 입력
  -> focus를 하고싶은 시점에 ref변수명.current.focus(); 함수 사용
  -> 렌더링이 끝나자마자 focus()를 하고싶다면 useEffect(()=>{},[])를 사용 하여 렌더링 직후 focus
*/
import React, { useEffect, useRef, useState } from 'react';
const App = () => {
  const inputRef = useRef();

  useEffect(() => {
    // console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다 ${inputRef.current.value} 님!`);
    inputRef.current.focus();
  };

  return (
    <div>
      <form action="">
        <input type="text" placeholder="username" ref={inputRef} />
        <button onClick={login}>로그인</button>
      </form>
    </div>
  );
};
export default App;
