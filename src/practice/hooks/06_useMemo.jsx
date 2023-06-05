/*eslint-disable*/
// useMemo란? Memoization을 한다는 의미로, 복잡한 계산의 결과를 캐싱(저장)해두었다가 나중에 다시 함수를 동작시켜 복잡한 계산하는 것이 아니라, 결과만 출력해주는 것을 말한다.
// useMemo는 성능을 위해서 필요한 기능이지만, 남용하게 된다면 오히려 성능을 떨어트리게 된다. 특히 useMemo는 메모리를 사용해 캐싱을 하기 때문에 무분별한 사용은 오히려 메모리를 차지하여 좋지 않은 효과를 보인다.

import React, {useEffect, useMemo, useState} from "react";

function App(){
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    // 아래 구문을 사용하면 메모이제이션에 의해 리렌더링 할때마다 오브젝트가 초기화 되는 것이 아닌, isKorea 변수가 변할때만 오브젝트가 초기화 됨. (렌더링 작업을 줄여 최적화 가능)
    const location = useMemo(()=>{
        return {
            country : isKorea ? '한국' : '외국',
        };
    },[isKorea])

    // 아래 구문과 같이 오브젝트를 사용할 경우 다른 어떤 오브젝트에서 리렌더링이 되더라도 함께 리렌더링 될 수밖에 없음.
    // 이유는 오브젝트의 경우 내용물이 같이 보여도 다른 메모리에 저장되기 때문.
    // const location = {
    //     country : isKorea ? '한국' : '외국',
    // };

    useEffect(()=>{
        console.log('useEffect 호출');
    },[location]);

    return(
        <div>
            <h2>하루에 몇 끼 먹어요?</h2>
            <input type="number"
            value={number}
            onChange={(e)=>setNumber(e.target.value)} />
            <hr />
            <h2>어느 나라에 있어요?</h2>
            <p>나라 : {location.country} </p>
            <button onClick={()=>setIsKorea(!isKorea)}>비행기 타자</button>
        </div>
    )
}

// const hardCalculate = (number) => {
//     for (let i = 0; i < 999999999; i++) {} // 생각하는 시간
//     console.log("어려운 계산!");
//     return number + 10000;
// }

// const easyCalulate = (number) =>{
//     console.log("짱 쉬운 계산!");
//     return number + 1;
// }

// function App(){
//     const [hardNumber, setHardNumber] = useState(1);
//     const [easyNumber, setEasyNumber] = useState(1)

//     // const hardSum = hardCalculate(hardNumber);
//     const hardSum = useMemo(()=>{
//         return hardCalculate(hardNumber)
//     }, [hardNumber])
//     // 해당 useMemo를 사용하면 hardNumber가 변경되어야지만 함수를 호출해 초기화되고, 그렇지 않으면 리렌더링 되더라도 함수를 호출하지 않고 hardSum이 초기화 되지 않아, 복잡한 함수계산을 하지 않을 수 있음.
//     const easySum = easyCalulate(easyNumber)

//     return(
//         <div>
//             <h3>어려운 계산기</h3>
//             <input type="number" value={hardNumber} onChange={(e)=>setHardNumber(parseInt(e.target.value))} />
//             <span>+10000 = {hardSum} </span>

//             <h3>쉬운 계산기</h3>
//             <input type="number" value={easyNumber} onChange={(e)=>setEasyNumber(parseInt(e.target.value))} />
//             <span>+1 = {easySum} </span>
//         </div>
//     )
// }
export default App;