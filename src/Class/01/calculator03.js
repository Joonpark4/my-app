import React from "react";
import { useState } from 'react';

// state 끌어올리기(lifting-state-up)
function AddCalculator(props) {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    // useState hook의 초기값을 생략하면, 해당 state의 초기값은 undefined가 됩니다. 
    // 이때, 컴포넌트가 렌더링될 때 해당 state의 값이 undefined에서 첫 번째 전달인자로
    // 지정한 값으로 설정됩니다. 
    const handleNum1 = (e) => {
        const newNum1 = parseInt(e.target.value);
        setNum1(newNum1);
    }
    const handleNum2 = (e) => {
        const newNum2 = parseInt(e.target.value);
        setNum2(newNum2);
    }

    let result;
    switch (props.operation) {
        case '+':
        result = num1 + num2;
        break;
        case '-':
        result = num1 - num2;
        break;
        case '*':
        result = num1 * num2;
        break;
        case '/':
        result = num1 / num2;
        break;
        default:
        result = '';
    }

    return (
        <div>
            <h2>{props.name}</h2>
            <input type="number" name="num1" value={num1} onChange={handleNum1}/>
            <input type="number" name="num2" value={num2} onChange={handleNum2}/>
            결과 : {result}
        </div>
    )  
}


// 두 개의 이벤트 핸들러 함수 handleNum1과 handleNum2를 정의합니다. 
// 사용자가 두 개의 입력 필드에 입력할 때마다 호출됩니다. 
// 이 함수들은 입력 값의 문자열을 pareInt 를 사용하여 정수로 변환하고,
// 해당 값에 맞는 상태 업데이트 함수(setNum1 또는 setNum2)를 사용하여
// state 값을 업데이트합니다. 
// javaScript에서 문장의 끝에 세미클론을 붙이지 않아도 실행이 가능합니다. 
// 따라서 ;을 생략해도 문제가 되지 않습니다. 
// 코드의 가독성을 높이기 위해 일관성 있게 세미클론을 사용하는 것이 좋습니다 


function App() {
    return (
        <div>
            <h1>계산기</h1>
            <AddCalculator name="더하기" operation="+"/>
            <AddCalculator name="빼기" operation="-"/>
        </div>
    );
}
export default App;