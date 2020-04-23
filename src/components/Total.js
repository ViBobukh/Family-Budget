import React, {Component} from "react";
import Paragraph from "./Paragraph.js";

function TotalElem(props) {
    return (
        <div className="paragraph">
            <Paragraph info={props.info}/>
            <div className="total">{props.totalValue}</div>
        </div>
    )
}

export default TotalElem;