/* eslint-disable */
// 주석은 ESLint 규칙을 일시적으로 비활성화 하는 방법입니다.
import React from 'react';
import './blog.css';
import { useState } from 'react';

function App() {
  // 미리 보관하는 기능
  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '파이썬 독학',
    '독도는 우리땅',
  ]);
  const [따봉, 따봉변경] = useState(0);
  // useState hook을 사용해 글제목이라는 상태 변수와 글제목 변경이라는 상태변경 함수를 선언하고, 초기값으로 문자열 배열을 설정함
  const [modal, setModal] = useState(false);
  // useState 훅을 이용하여 따봉 상태와 그를 업데이트할 따봉변경 함수를 선언합니다.
  // 초기값으로 false를 전달합니다.
  const [toggleStatues, setToggleStatues] = useState([false, false, false]);
  // useState 훅을 이용하여 toggleStatus 상태와 그를 업데이트할 setToggleStatus 함수를 선언합니다. 초기값으로 false 값을 갖는 길이가 3인 배열을 전달합니다.

  const toggleTitle = (idx) => {
    // toggleTitle 함수는 idx 인덱스를 받아 해당하는
    const newTitle = [...글제목];
    const newToggleStatus = [...toggleStatues];

    newToggleStatus[idx] = !newToggleStatus[idx];
    // toggleStatus 값을 토글하고, 그에 따라 newTitle 배열을 업데이트합니다.
    if (idx === 0) {
      newTitle[0] = newToggleStatus[idx] ? '여자코트 추천' : '남자코트 추천';
    } else if (idx === 1) {
      newTitle[1] = newToggleStatus[idx] ? '강서 우동 맛집' : '강남 우동 맛집';
    } else if (idx === 2) {
      newTitle[2] = newToggleStatus[idx] ? '자바 독학' : '파이썬 독학';
    }
    // 글제목 변경과 setToggleStatus 함수를 이용하여 상태를 업데이트 합니다.
    글제목변경(newTitle);
    setToggleStatues(newToggleStatus);
  };
  // toggleModal 함수는 modal 상태 값을 토글하는 setModal 함수를 호출합니다.
  const toggleModal = () =>{
    setModal(!modal);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={()=> toggleTitle(0)}>수정버튼1</button>
      <button onClick={()=> toggleTitle(1)}>수정버튼2</button>
      <button onClick={()=> toggleTitle(2)}>수정버튼3</button>
      <div className="list">
        <h4>
          {글제목[0]}{' '}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{' '}
          {따봉}{' '}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={toggleModal}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      {modal && <Modal onClose={toggleModal} />}
    </div>
  );
}

function Modal( {onClose} ){
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={onClose}>닫기</button>
    </div>
  )
}
// 1.싱글페이지 어플리케이션을 만들 떄 사용합니다
// 2.html 재사용이 편리
// 3.같은문법으로 앱개발이 가능하다
// 나중에 Redux 쓰는 이유

// 1.props 문법 귀찮을때 쓴다
// 2.state 변경관리할 때 쓴다(상태관리가 용이하다)
// -components들은 수정요청만이 가능하다
// store.js를 만들어서 관리한다

// 복습)    JSX 문법 1. html에 class 넣을 땐 className
//          JSX 문법 2. 변수를 html에 꽂아넣을 때는 {중괄호}
// 자바스크립트 변수같은 곳에 있던 자료를 html 중간에 꽂아서 보여주고 싶을 때가 많습니다

//옛날 자바스크립트 문법을 쓴다면 document.getElementById().innerHTML=??
//이런식이지만
//리엑트에서는 더 쉽게 데이터를 꽂아넣을 수 있다
//중괄호 안에 데이터바인딩하고 싶은 변수명만 담으면 된다. 이를 데이터이라고 한다
//JSX 문법 3.html에 style 속성 넣고 싶으면
//<div style="color: blue"> 이런건 넣고 싶다면
//JSX 상에서는 style={}안에 {}자료형으로 집어넣어야한다

// import {useState} from 'react'; 중괄호 쓰는 이유는
// useState 함수는 배열을 반환하므로, 배열 배구조화 할당(destructuring assignment)을 사용하여 해당 배열을 첫 번째 요소를 count 변수에 할당하고, 두번째 요소를 setCount 변수에 할당합니다.
// 예를 들어, const[count, setCount] = useState(0); 코드에서는 useState(0)이 반환하는 배열의 첫 번째 요소가 count 변수에, 두 번째 요소가 setCount 변수에 할당됩니다.
// 배열 비구조화 할당을 사용하여 변수명을 지정하면 코드 가독성이 좋아지고, 요소에 접근할 때 인덱스를 사용하는 것보다 변수명을 사용하는 것이 더 직관적입니다.
// state의 가장 큰 장점은 state가 변경될 때마다 자동으로 state와 관련된 html이 재렌더링이 된다는 것인데,
// state는 상품명, 글제목, 가격 이런 것처럼 자주 변할 것 같은 데이터들을 저장하는 게 좋은 관습입니다.

// eslint 라는 친구가 잘못된 코딩 관습 교정해 주는 건데, 변수를 만들었는데 안쓰고 있네요. 라는 식의 잔소리를 warning으로 띄워줍니다. 초보때는 이런거 지키는것 보다는 코드짜고 실행하는게 중요해서 다음과 같은 주석을 js파일 최상단에 추가해주면 eslint 기능을 잠시 끌 수 있습니다.
// /*eslint-disable*/

export default App;
