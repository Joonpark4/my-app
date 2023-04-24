import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import store from "./Class/06/redux/store";
// import App from "./Class/06/redux/App";
import App from './practice/mrRedux/App.js';
import store from './practice/mrRedux/store.js';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);