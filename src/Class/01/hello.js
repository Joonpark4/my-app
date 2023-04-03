import React from "react";

function Hello({color, name}){
    return <div style={{color}}>안녕하세요{name}</div>

}

export default Hello;

// color와 name 은 React 컴포넌트 간에 데이터를 전달하는 데 사용되는 속성
// props(properties)라고 부릅니다