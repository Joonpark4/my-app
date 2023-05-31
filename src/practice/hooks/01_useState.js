/*eslint-disable*/
import React, { useState } from 'react';

// function App() {
//   const [time, setTime] = useState(1)
//   const handleClick = () =>{
//     let newTime;
//     if(time >= 12){
//       newTime = 1;
//     } else {
//       newTime = time + 1;
//     }
//     setTime(newTime);
//   }

//   return (
//     <div>
//         <span>현재 시각 : {time}시</span>
//         <br />
//         <button onClick={handleClick}>Update</button>
//     </div>
//   );
// }

function App() {
  const [names, setNames] = useState(["홍길동", "김민수"]);
  const [input, setInput] = useState('');
  const handleChange = (e) =>{
    setInput(e.target.value);
  }

  // setNames에 콜백함수를 주는데, 콜백의 인자로는 업데이트 해주기 이전의 상태를 갖게 된다. (prevState)
  // 리턴 값은 배열[...이전 값, 현재 값] 으로 해주면 배열이 잘 저장된다. 이때, 이전 값 앞에 ...(배열 해제)를 해주어야 값이 잘 들어간다.
  // 배열 앞으로 현재 값을 넣고 싶으면 [현재 값, ...이전 값] 으로 해주면 된다.
  const handleUpload = () =>{
    setNames((prevState)=>{
      return([...prevState, input])
    })
    setInput('')
  }
  return (
    <div>
        <input type="text" value={input} onChange={handleChange} />
        <br /> <br />
        <button onClick={handleUpload}>Upload</button>
        <br /> <br />
        {names.map((name,i)=>{
          return <p key={i}>{name}</p>
        })}
    </div>
  );
}

export default App;
