import React from 'react';

function App() {
  const productList = {
    products: [
      {
        title: '개발자 무릎 담요',
        price: 17500,
        id: 101,
      },
      {
        title: 'Hack Your Life 개발자 노트북 파우치',
        price: 29000,
        id: 102,
      },
      {
        title: '우당탕탕 누리호의 실험실 스티커북',
        price: 29000,
        id: 103,
      },
      {
        title: '버그를 Java라 버그잡는 누리씨 키링',
        price: 29000,
        id: 104,
      },
    ],
  };
  return (// props로 전달하지 않고, 컴포넌트 내부에서 변수로 만듭니다.
  <div>
    {productList.products.map((el, index)=>{
        return(
            <div key={el.id}>
                <h2>{el.title}</h2>
                <h2>{el.price}</h2>
            </div>
        )
    })}
  </div>
  )
}
export default App;

// productList.products.map((el,index)=> ...) 코드에서 el은 products 배열의 각 요소를 차례로 가리키게 됩니다.
// 이후 콜백 함수 내에서 el을 사용하여 각 요소의 title, price, id 프로퍼티에 접근하고 있습니다.
// map 하면 쌍, 키와 값을 기억해야한다