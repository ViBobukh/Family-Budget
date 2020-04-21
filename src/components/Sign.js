import React, {Component} from "react";


function Sign(props){
    return (
        <div className="signs">
            <button onClick={props.onPlus}>+</button>
            <button onClick={props.onMinus}>-</button>
        </div>
    )
}

export default Sign;