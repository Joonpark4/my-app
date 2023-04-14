import React from "react";

function App(){
    const name = '누리호!';
    function 함수(){
        return 100
    }
    const 변수 = 10
    const 값 = true
    const 값2 = null
    return (
        <div className="App">
            <h1>안녕, {name} 1호</h1>
            <p>{100+1}</p>
            <p>{'hello'+'world'}</p>
            <p>{[1,2,3].map(x=>x**2)}</p>
            <p>{함수()}</p>
            <p>{변수}</p>
            <p>{값?'one':'two'}</p>
            <p>{값2??'one'} </p>
        </div>
    )
}
export default App

// ??는 nullish coalescing 연산자입니다.
// 이 연산자는 왼쪽 피 연산자가 null 또는 undefined일 경우 오른쪽 피 연산자를 반환합니다.
// 만약 왼쪽 피 연산자가 falsy하지만 nulll 또는 nundefined가 아닐 경우에는 왼쪽 피 연산자를 반환합니다.

// 화면에 one 이라는 문자열을 표시하는 단락 요소를 추가, 이 값은 값2 변수가 null이므로, 'one'을 출력합니다