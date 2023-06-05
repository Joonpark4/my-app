/*eslint-disable*/
// useRecucer : useState와 동일하게 State를 생성하고 관리할 수 있게 해주는 도구이다.
// 단, 여러개의 하위값을 포함하는 복잡한 State를 다루어야 할 때, useReducer를 사용하면 코드가 간결해지고 유지보수가 쉬워진다.
// useReducer는 Reducer, Dispatch, Action 세가지로 나뉜다.
// 철준이가 은행에 돈 만원 출금을 요구한다면, 은행은 철준이의 계좌에서 만원이 빠져나갈 수 있도록 거래내역을 업데이트 시켜준다.
// 이때 거래내역을 State라고하고, 은행은 거래내역을 업데이트 하는 것을 도와주므로 Reducer라고 할 수 있다. 철수는 요구를 하므로 철수가 Dispatch이고, 철수가 요청한 그 요구는 Action이라 할 수 있다.

// reducer - state를 업데이트하는 역할(은행)
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용
import React, {useReducer, useState} from "react";

const ACTION_TYPES = {
    deposit : 'deposit',
    withdraw : 'withdraw',
}

const reducer = (state, action)=>{
    console.log('reducer가 일을 합니다!', state, action)
    // 리듀서가 리턴하는 값이 새로 업데이트 될 state 값이 된다.
    // 현재 state + action.payload 값을 해주면 올바르게 값을 더해 업데이트 될 수 있다.
    switch (action.type) {
        case ACTION_TYPES.deposit:
            return state + action.payload;
        case ACTION_TYPES.withdraw:
            return state - action.payload;
        default:
            return state
    }
}

function App(){
    const [number, setNumber] = useState(0);
    const [money, dispatch] = useReducer(reducer, 0)

    return(
        <div>
            <h2>useReducer 은행에 오신 것을 환영합니다.</h2>
            <p>잔고 : {money}원</p>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} step="1000" />
            <button onClick={()=>{
                dispatch({type:ACTION_TYPES.deposit, payload : parseInt(number) });
                setNumber(0);
            }}>예금</button>
            <button onClick={()=>{
                dispatch({type:ACTION_TYPES.withdraw, payload : parseInt(number) });
                setNumber(0);
            }}>출금</button>
        </div>
    )
}

export default App;