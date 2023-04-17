import React from "react";
import { createRoot } from "react-dom/client";
import { store } from './js/store';
import CounterDisplay from './js/CounterDisplay';
import CounterButtons from './js/CounterButtons';
import { Provider } from "react-redux";

function App(){
    return(
        <Provider store={store}>
            <div>
                <CounterDisplay/>
                <CounterButtons/>
            </div>
        </Provider>
    )
}
export default App;