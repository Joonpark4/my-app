import React, { useState } from 'react';
import { useSpring, a } from '@react-spring/web';
import style from './styles.module.css';

// useState hook을 사용하여 flipped 상태 변수를 만들고 초기값을 false로 설정
// useSpring hook을 사용하여 opacity와 transform 속성을 만듭니다.
// opacity 속성은 flipped값이 true이면 1이고 그렇지 않으면 0입니다.
// transform 속성은 flipped 값이 true이면 180도 회전하고, 그렇지 않으면 0도 회전합니다.
// 이렇게 만든 opacity와 transform속성을 사용하여 카드를 뒤집는 효과를 구현합니다.
// styles.module.css 파일에서 정의한 container, c, front, back 클래스를 사용하여 앞면과 뒷면을 나타내는 div요소를 만듭니다
// onClick 이벤트 핸들러를 등록하여 클릭할 때마다 flipped 상태 변수를 반전시킵니다.
// <a.div> 컴포넌트는 @react-spring/web에서 제공하는 애니메이션 div 요소입니다.
// 애니메이션을 적용하려면 이 컴포넌트를 사용해야 합니다.
// style 속성을 사용하여 애니메이션 효과를 지정합니다.
// opacity와 transform 속성은 to() 메소드를 사용하여 값을 계산합니다.
// rotateX 속성은 직접 값을 지정합니다.

export default function App() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, triction: 80 },
  });
  // useState hook을 사용하여 flipped 상태 변수를 만들고 초기 값을 false로 설정합니다.
  // useSpring hook을 사용하여 css속성 애니메이션을 만드는 객체를 만듭니다.
  // opacity 속성은 flipped 값이 true이면 1이 되고, 그렇지 않으면 0이 됩니다.
  // transform 속성은 css transform 속성을 사용하여 3D 변형을 지정하는데,
  // perspective(600px)은 카드의 원근감을 나타내며
  // rotateX()는 카드를 X축을 기준으로 회전시킵니다.
  // flipped 값이 true이면 180도 회전하고, 그렇지 않으면 0도 회전합니다.
  // config 속성은 애니메이션을 구성하는 객체입니다. mess는 물리적인 질량을 나타내며, 값이 클수록 애니메이션이 무거워지고 느려집니다.
  // tension은 스프링의 강성을 나타내며, 값이 클수록 스프링이 긴장되어 빠르게 움직입니다.
  // priction은 스프링의 마찰력을 나타내며, 값이 클수록 스프링이 둔감하게 움직입니다.
  // 이 값들은 애니메이션의 움직임을 조절하는 데 사용됩니다.
  return (
    <div className={style.container} onClick={() => set((state) => !state)}>
      <a.div
        className={`${style.c} ${style.back}`}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      />
      <a.div
        className={`${style.c} ${style.front}`}
        style={{ opacity, transform, rotateX: '180deg' }}
      />
    </div>
  );
}
// 뒤집히는 카드를 나타내는 두 개의 div 요소를 만듭니다.
// styles.container 클래스를 사용하여 부모 div 요소를 만들고, onClick이벤트 핸들러를 등록하여 클릭할때마다 set함수를 호출하고 flipped 상태 변수를 반전시킵니다.

// 두 개의 자식 div 요소는 앞면과 뒷면을 나타냅니다.
// a.div 컴포넌트를 사용하여 애니메이션을 적용합니다.
// className 속성에는 styles.c와 styles.back 또는 styles.front 클래스를 조합하여 사용합니다.

// 뒷면 요소에는 opacity 속성에 to() 메소드를 사용하여 값이 변화하는 애니메이션을 적용합니다.
// 1-o는 opacity 값이 0이 되면 불투명도가 1이 되도록 하는 식입니다.
// transform 속성은 useSpring hook에서 계산된 값을 사용합니다.
// 앞면 요소에는 opacity, transform, rotateX 속성을 지정합니다.
// opacity와 transform 속성은 useSpring hook에서 계산된 값을 사용합니다.
// rotateX속성은 직접 값을 지정하여 180도 회전시킵니다.