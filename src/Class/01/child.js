import { useState } from 'react';

export default function App() {
  return (
    <div>
      부모 컴포넌트
      <Child />
    </div>
  );
}

const Child =()=>{
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count+1);
    };
    return(
        <div>
            자식 컴포넌트
            <span>{count}</span>
            <button onClick={increment}>증가</button>
            <Grandchild count={count} />
        </div>
    )
}

const Grandchild = ({ count }) => {
  return (
    <div>
      손자 컴포넌트
      <span>{count}</span>
    </div>
  );
};

// App 컴포넌트는 부모 컴포넌트 입니다. 여기서 Child 컴포넌트를 렌더링 합니다.
// Child 컴포넌트는 자식 컴포넌트입니다.
// 이 컴포넌트는 useState를 사용하여 count 상태를 관리하고 있습니다.
// 초기 값은 0입니다
// increment 함수는 Child 컴포넌트 내에 정의되어 있습니다.
// 이 함수는 count 상태 값을 1 증가시킵니다.
// Child 컴포넌트에 "증가" 버튼이 렌더링 됩니다.
// 이 버튼을 클릭하면 increment 함수가 호출되어 count 상태 값이 증가합니다.
// Child 컴포넌트는 또한 GrandChild 컴포넌트를 렌더링합니다.
// GrandChild 컴포넌트는 숫자 변경과 관련된 기능이 없기 때문에 상태를 관리하지 않고, 단순히 "손자 컴포넌트"라는 텍스트를 렌더링합니다.

// 이 컴포넌트는 손자 컴포넌트입니다.
// Granchild 컴포넌트는 숫자 변경과 관련된 기능이 없기 때문에 상태를 관리하지 않고, 단순히 "손자 컴포넌트"라는 텍스트를 렌더링합니다

// 해보기
// 기본적으로 React에서 부모 컴포넌트는 자식 컴포넌트에게 prop을 통해 데이터를 전달하며, 각 컴포넌트는 독립적으로 상태를 관리할 수 있습니다.
// 이전 예제에서 Child 컴포넌트에서만 count 상태가 관리되고 있어서 Child 컴포넌트의 숫자만 변경되었습니다.

// 만약 부모 컴포넌트의 상태가 자식과 손자 컴포넌트에도 영향을 미치길 원한다면, 상태를 부모 컴포넌트에서 관리하고 자식 및 손자 컴포넌트로 prop을 통해 전달해야 합니다.
