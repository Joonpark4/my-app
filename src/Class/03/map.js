import React from 'react';

function App() {
  return (// props로 전달하지 않고, 컴포넌트 내부에서 변수로 만듭니다.
  <div>
    {[1,2,3].map((number, index)=>{
        return <div key={index}>{number}</div>;
    })}
    {[1,2,3].map((number, index)=>{
        return <div key={index}>{number}</div>;
    })}
  </div>
  );
}
export default App;

// 두 코드 조각 모두 Array.prototype.map() 함수를 사용하여 배열의 각 요소를 순회하고 있습니다.
// map() 함수는 각 요소에 대해 콜백 함수를 실행하며,
// 이 콜백 함수의 매개변수로 요소(el)와 해당 요소의 인덱스(index)를 받습니다.
// 두 코드 조각에서 index를 사용하는 부분은 <div> 요소의 key 속성입니다.
// key 속성은 React가 효율적으로 리스트를 렌더링하고 업데이트 할 수 있도록 도와줍니다.
// 여기서 index는 배열 내의 고유한 위치를 나타내므로, 각 <div> 요소에 고유한 key 값을 제공합니다.