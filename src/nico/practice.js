import React from 'react';

function Food(props) {
  return <h1>I like {props.favorit}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food favorit="kimchi" />
      <Food favorit="ramen" />
      <Food favorit="samgiopsal" />
    </div>
  );
}

export default App;
