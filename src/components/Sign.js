import React from "react";
import DataInput from "./Input.js";

function clickPlus() {
    return (
        <Input/>
    )
}

function clickMinus() {
    return (
        <div/>
    )
}

function Sign() {
    return (
        <div className="signs">
            <button onClick={()=><DataInput />}>+</button>
            <button onClick={()=><div/>}>-</button>
        </div>
    )
}

export default Sign;