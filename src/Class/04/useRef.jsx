
import React, { useRef, useState } from "react";

// useRef를 사용하여 DOM 요소에 대한 참조를 저장하고, 해당 요소의 값을 가져와 상태를 업데이트 하는 리액트 문법
// 자바스크립트로 치면 getElementById 이 형식을 리액트에서는 다음과 같이 사용

const App =() =>{
 const emailInput = useRef(null); // email input 에 대한 useRef
 const pwInput = useRef(null); // pw input에 대한 useRef
 const [emailValue, setEmailValue] = useState(""); // email state 값
 const [pwValue, setPwValue] = useState("") // pw state 값

 const inputCheck = (e) => {
    e.preventDefault();
    console.log(emailInput)
    console.log(pwInput)
    setEmailValue(emailInput.current.value);
    setPwValue(pwInput.current.value);
 };

 return(
    <form style={{display:"flex", flexDirection:"column"}}>
        <label>
            이메일 : <input type="email" ref={emailInput} />
        </label>
        <label>
            비밀번호 : <input type="password" ref={pwInput} />
        </label>

        <button type="submit" style={{width:"100px"}} onClick={inputCheck}>회원가입</button>
        <span>{emailValue}</span>
        <span>{pwValue}</span>
    </form>
 );
};
export default App;

// useMemo는 React의 훅 중 하나로, 값의 메모이제이션(캐싱)에 사용됩니다.
// 메모이제이션 : https://medium.com/@soyoung823/memoization-cache-f8b5930e3ee1
// useMemo는 값이 변경될 대마다 주어진 함수를 호출하고, 결과를 메모이즈(캐싱)하여 반환합니다.
// 이렇게 하면 연산비용이 큰 함수의 호출을 줄이고, 불필요한 재계산을 피할 수 있습니다.
