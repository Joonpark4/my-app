import React, { useState } from 'react';

// function clickLike(like, setLike) {
//     setLike(like + 1);
//   }

//   function Resume(props) {
//     const [like, setLike] = useState(0);
//     const myColor = props.color;
//     const styleColor = { color: myColor };

//     return (
//       <div style={{ border: "solid 1px", width: "500px" }}>
//         <h1>{props.name} 자기소개서 </h1>
//         <h1>{props.hello}</h1>
//         <h2>취미 : {props.hobby}</h2>
//         <h2>좋아하는 음식 : {props.food}</h2>
//         <h2>
//           좋아하는 색 : <span style={styleColor}>{myColor}</span>
//         </h2>
//         <button onClick={() => clickLike(like, setLike)}>
//           like <span>{like}</span>
//         </button>
//       </div>
//     );
//   }

//   function App() {
//     return (
//       <Resume
//         name="John"
//         hello="Hello!"
//         hobby="reading"
//         food="pizza"
//         color="blue"
//       />
//     );
//   }

//   export default App;

function clickLike(like, setLike) {
  return setLike(like + 1);
}

function Resume(props) {
  const [like, setLike] = useState(0);
//   const myColor = props.color;
//   const styleColor = { color: props.color };
    const color = props.color;
  return (
    <div style={{ border: 'solid 1px', width: '500px' }}>
      <h1>{props.name} 자기소개서 </h1>
      <h1>{props.hello}</h1>
      <h2>취미 : {props.hobby}</h2>
      <h2>좋아하는 음식 : {props.food}</h2>
      <h2>
        {/* 변수명이 color일 경우에는 "color : 색상" 할 필요가 없다 */}
        좋아하는 색 : <span style={{color}}>{color}</span>
      </h2>
      <button onClick={() => clickLike(like, setLike)}>
        like <span>{like}</span>
      </button>
    </div>
  );
}

function App() {
  return <Resume name="Joon" hello="Hello" hobby="Game" food="Apple" color="blue" />;
}

export default App;
