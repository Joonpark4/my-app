import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from "react-redux";
// import store from "./Class/06/redux/store";
// import App from "./Class/06/redux/App";
// import App from './practice/mrRedux/App.js';
// import store from './practice/mrRedux/store.js';
import App from './practice/hooks/05_useContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// const root = document.getElementById("root");

// ReactDOM.createRoot(root).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
