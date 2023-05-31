/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import Timer from './component/Timer'

// function App() {
//   const [count, setCount] = useState(1);
//   const [name, setName] = useState('');
//   const handleCountUpdate = () => {
//     setCount(count + 1);
//   };
//   const handleInputChange = (e) => {
//     setName(e.target.value);
//   };

//   // 렌더링 될때마다 매번 실행
//   useEffect(() => {
//     console.log('렌더링 되었습니다');
//   });

//   // 마운팅 + count가 변화 될때마다 매번 실행
//   useEffect(() => {
//     console.log('count 값 변화');
//   },[count]);

//   // 마운팅 + name이 변화 될때마다 매번 실행
//   useEffect(() => {
//     console.log('name 값 변화');
//   },[name]);

//   // 마운팅 될때 한번만 실행
//   useEffect(() => {
//     console.log('마운팅 완료');
//   });
//   return (
//     <div>
//       <button onClick={handleCountUpdate}>Update</button>
//       <span>count : {count}</span>
//       <input type="text" value={name} onChange={handleInputChange} />
//     </div>
//   );
// }

function App(){
    const [showTimer, setShowTimer] = useState(false)
    return(
        <div>
            {showTimer && <Timer></Timer>}
            <button onClick={()=>setShowTimer(!showTimer)}>Toggle Timer</button>
        </div>
    )
}

export default App;
