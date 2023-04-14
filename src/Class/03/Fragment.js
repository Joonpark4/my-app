import React, { Fragment } from "react";

function App(){
    return (
        <React.Fragment>
            <h1>안녕, 누리호 1호!</h1>
            <h1>안녕, 누리호 2호!</h1>
        </React.Fragment>
    )
}
export default App

// 프레그먼트(Fragment)란, React에서 여러개의 컴포넌트를 렌더링 하려고 할 때 불필요한 HTML 요소를 만들지 않고 컴포넌트를 그룹화 하기 위해 사용되는 개념입니다.
// <>와 </>사이에 있는 컴포넌트들은 프래그먼트로 묶여 있습니다.
// 이렇게 함으로써, 불필요한 div 요소를 생성하지 않고 여러개의 하위 컴포넌트를 렌더링 할 수 있습니다.