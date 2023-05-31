/*eslint-disable*/
// 컴포넌트에 변수를 전해줄때 보통 react에서는 상위컴포넌트에서 하위컴포넌트로 props로 전해주게 되는데, 컴포넌트가 많을 경우 하나하나 전달하기가 어려울 수 있다. (Prop Drilling)
// 이런 변수를 하위 컴포넌트에 쉽게 가져올 수 있도록 useContext를 사용할 수 있다.
// 단, Contet는 반드시 필요할때만 사용하는게 좋으며, Context가 사용된 컴포넌트는 재사용이 어려워 질 수 있다.
// react에서도 단지 Props Drilling을 피하기 위한 목적이라면 Component Composition(컴포넌트 합성)을 권장하고 있다.

import React, { useState } from 'react';
import Page from './component/Page';
import './component/useContext.css';
import { ThemeContext } from './component/ThemeContext';
import { Usercontext } from './component/UserContext';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <Usercontext.Provider value={'김씨'}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </Usercontext.Provider>
  );
  //   return <Page isDark={isDark} setIsDark={setIsDark} />
}
export default App;
