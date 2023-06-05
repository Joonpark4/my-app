/*eslint-disable*/
// useCallback 또한 복잡한 계산의 값을 메모리에 넣어두었다가 재 사용하는 useMemo와 같이 메모이제이션하는 기법이므로 닮은 부분이 있다.
// 단, useCallback은 인자로 전달한 콜백함수 그 자체를 메모이제이션 해주는 차이가 있다.
// useCallback은 두개의 인자를 받는데, 첫번째는 메모이제이션을 해줄 콜백함수, 두번째는 의존성 배열을 받는다. 이때, 의존성 배열이 변경되지 않는 이상 콜백함수는 초기화 되지 않는다.

import { useCallback, useEffect, useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);
  const someFunction = useCallback(() => {
    console.log(`someFunc : number : ${number}`);
    return;
  }, [number]); // number가 변경될 때마다 메모이제이션 값이 변경됨

//   const someFunction = () =>{
//       console.log(`someFunc : number : ${number}`)
//       return;
//   }
  // someFuinction은 변경되지 않았는데 다음과 같은 useEffect가 number값이 변할때마다 호출된다.
  // 변수에 객체를 대입할때, 변수 자체에 객체가 저장되는 것이 아니라 변수는 객체의 주소만 가리키게 된다.
  // 그런데, 앱이 리렌더링 될때마다 함수객체가 매번 새로 생성되어서 다른 메모리 주소를 가리키는 새로운 변수가 생성되게 된다.
  // 그래서 useEffect를 사용해 someFunction이 변경될때만 콜백함수를 호출하고 싶은데, 리렌더링이 될때마다 someFunction이 변경되었다고 판단하고 매번 콜백함수를 호출하는 것이다.
  useEffect(() => {
    console.log('SomeFunction이 변경되었습니다.');
  }, [someFunction]);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={()=>setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}
export default App;
