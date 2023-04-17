import React from "react";
import { useSelector } from "react-redux";

function CounterDisplay(){
    const count=useSelector((state)=>state.count);
    return <div>Count:{count}</div>
}
export default CounterDisplay;