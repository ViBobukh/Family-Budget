import React from "react";
import '../style/Element.css';
import Paragraph from "./Paragraph.js";
import Sign from "./Sign.js"

function Element(props) {
    return(
        <div className="main">
            <Paragraph info={props.info}/>
            <Sign/>
        </div>
    )
}


export default Element;
