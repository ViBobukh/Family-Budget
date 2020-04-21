import React, {Component} from "react";

function Paragraph({info}) {
    return (
        <div className="captionMain">
            <img src={info.image}/>
            <h2 className="caption">{info.name}</h2>
        </div>
    )
}

export default Paragraph;