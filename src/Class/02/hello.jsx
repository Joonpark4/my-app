/* eslint-disable */
// 주석은 ESLint 규칙을 일시적으로 비활성화 하는 방법입니다.
import React from "react";

function App(){
    const styleH2 = {border: 'solid 1px black', color:'blue', fontSize:'32px'};

    return(
        <div>
        <h1>hello world : H1 </h1>
        <h2 style={styleH2}>hello world : const styleH2</h2>
        <h2 style={{border: 'solid 1px black', color:'blue', fontSize:'32px'}}>hello world : tag style</h2>
        <p className="content">hello world</p>
        </div>
    ) // app.jsx는 자바스크립트 XML 파일의 확장자입니다.
} // jsx는 리액트에서 사용되는 템플릿 언어
export default App
// jsx 파일을 자바스크립트 파일로 변환하기 위해서는 바벨(Babel)과 같은 도구를 사용한다
// jsx 파일에서는 자바스크립트와 HTML 태그를 함께 사용