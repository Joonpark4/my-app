import React from 'react';
import './06_ReduxToolkit.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './components/06_Store';
import { down, up } from './components/06_counterSlice';
import { change, back } from './components/06_nameSlice';

export default function App() {
  return (
    <div id="container">
      <h1>Readux Toolkit</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
}

function Left1() {
  return (
    <div>
      <h1>Left1</h1>
      <Left2 />
    </div>
  );
}
function Left2() {
   const myname = useSelector((state)=>{
    return state.myName.value;
   })
  return (
    <div>
      <h1>by : {myname}</h1>
      <Left3 />
    </div>
  );
}
function Left3() {
  const number = useSelector((state) => {
    return state.counter.value;
  });
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}
function Right1() {
    const myname = useSelector((state)=>{
     return state.myName.value;
    })
  return (
    <div>
      <h1>Name : {myname}</h1>
      <Right2 />
    </div>
  );
}
function Right2() {
    const dispatch = useDispatch();
  return (
    <div>
      <h1>Right2 <button onClick={()=>{
        dispatch(change("King"))
      }}>change</button></h1>
      <Right3 />
    </div>
  );
}
function Right3() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>
        Right3 <button onClick={() => dispatch(up(1))}>+</button>
        <button onClick={() => dispatch(down(1))}>-</button>
      </h1>
    </div>
  );
}
