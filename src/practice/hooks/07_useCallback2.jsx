/*eslint-disable*/
// useCallback 또한 복잡한 계산의 값을 메모리에 넣어두었다가 재 사용하는 useMemo와 같이 메모이제이션하는 기법이므로 닮은 부분이 있다.
// 단, useCallback은 인자로 전달한 콜백함수 그 자체를 메모이제이션 해주는 차이가 있다.
// useCallback은 두개의 인자를 받는데, 첫번째는 메모이제이션을 해줄 콜백함수, 두번째는 의존성 배열을 받는다. 이때, 의존성 배열이 변경되지 않는 이상 콜백함수는 초기화 되지 않는다.

import { useCallback, useState } from 'react';
import Box from './component/box';

function App() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: 'pink',
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div style={{ backgroundColor: isDark ? 'black' : 'white' }}>
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)} step={20}
      />
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}
export default App;
