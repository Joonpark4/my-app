import { useEffect, useState } from "react";
import React from "react";

// useEffent는 훅의 일부로
// 컴포넌트에서 부수 효과 (sideEffect)를 수행할 수 있도록 해줍니다
// 부수효과란, 컴포넌트가 렌더링 될 때 외부와 상호작용하는 코드를 말합니다
// API 요청, 타이머 설정 등


function Counter() {
    const [count,setCount] = useState(0)
    const [bool,setBool] = useState(false);
    const handleCountUp = (e)=>{
        setCount(count+1)
    }

    
// useEffect는 함수의 형태로 사용되며, 첫번째 인자로 콜백 함수를 받습니다.
// 콜백 함수는 컴포넌트가 렌덩링 될 때마다 실행됩니다
// 두번째 인자로 배열을 받으며, 이 배열에 지정한 값이 변경될 때만 콜백 함수가 실행
// 두번째 인자를 생략한다면, 모든 값이 변경될 때마다 콜백함수가 실행됩니다.
// useEffect는 컴포넌트가 렌더링 된 후 실행되는 함수로, 특정 값을 감시하고 있을 때만 해당 값이 변경될 때 실행됩니다.
// 이를 통해 컴포넌트의 상태를 관리할 수 있습니다.
// 여기선 count 가 컴포넌트의 state로 존재하는데
// 이 state가 변할 때마다 뭔가 다른 효과를 주고 싶다면, useEffect 훅을 사용합니다.


    useEffect(()=>{
        if(bool){
            if(count % 2){
                alert('홀수 입니다')
            }else{
                alert('짝수 입니다')
            }
        }
        setBool(true)
    }, [count])
    return(
        <>
        <div>{count}</div>
        <button onClick={handleCountUp}>Up!</button>
        </>
    )
}
function App(){
    return(
        <div className="App">
            <Counter></Counter>
        </div>
    )
}
export default App;

//초기 렌더링 시 bool 상태값은 false입니다.
// handleCountUp 함수가 실행되면 count 상태값이 1 증가합니다.
// useEffect 함수가 실행됩니다.
// bool 값이 false이므로 if문 안의 코드는 실행되지 않습니다.
// setBool(true) 코드가 실행되어 bool 값이 true로 변경됩니다.
// handleCountUp 함수가 다시 실행되면 count 값이 2가 됩니다.
// useEffect 함수가 다시 실행됩니다.
// bool값이 true이므로 if문 안의 코드가 실행됩니다.
// count값이 2이므로, else문 안의 코드인 "짝수입니다."가 alert 창으로 나타납니다

// 처음 렌더링 시 bool값이 false이기 때문에
// useEffect 함수가 실행되지 않습니다
// 그러나 첫 번째 클릭 이후부터는 bool 값이 true가 되므로 useEffect 함수가 실행됩니다.
// count가 0이므로 count%2의 값은 0이 됩니다.
// 하지만 bool 값이 바뀐 후에 알림창이 띄워져서 이전 count 값인 0이 아닌 1이라는 값이 나타나게 됩니다.