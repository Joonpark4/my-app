/* eslint-disable */
// 주석은 ESLint 규칙을 일시적으로 비활성화 하는 방법입니다.
import React from 'react';
import './blog.css';
import { useState } from 'react';

function App() {
  // 컴포넌트
  // 미리 보관하는 기능
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '파이썬 독학',
  ]);
  const [따봉, 따봉변경] = useState([0,0,0]);
  const [modal, setModal] = useState(false); // 스위치

  [1, 2, 3].map(function (a) {
    // a라고 작명시 1, 2, 3 이 된다
    // console.log(a);
  }); // [1,2,3] 배열의 각 요소에 대하여 함수를 실행
  // map()메소드는 배열의 각 요소에 대하여 지정된 함수를 실행하고, 새로운 배열을 반환합니다.

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      {/* 버튼을 클릭하면, copy변수에 ...글제목을 복사합니다. ...는 전개 연산자로, 배열을 복사하는데 사영됩니다. 그 다음, copy의 첫번째 요소를 '여자코트 추천'으로 변경합니다. */}
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy); // 글제목변경 함수를 호출하여 글제목 상태를 copy로 업데이트 합니다.
        }}
      >
        수정버튼
      </button>
      {/* 이 코드는 화면의 첫 번째 리스트 제목을 '여자코트 추천' 으로 변경하는 역할을 합니다.*/}
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4>
              {글제목[i]}
              <span
                onClick={() => {
                  따봉변경(따봉[i] + 1);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>2월 18일 발행</p>
          </div>
        ); // map 반복문으로 반복생성한 html엔 key={i}이런 속성을 추가해야 합니다. 반복되는 엘리먼트를 구분하기 위하여 사용한다
      })
      }
      <button onClick={()=>{setModal(!modal)}}>{글제목[0]}</button>
      {
        modal == true ? <Modal /> : null
      }
    </div>
  );
}

function Modal({ onClose }) {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={onClose}>닫기</button>
    </div>
  );
}
export default App;
