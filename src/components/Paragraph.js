import React from "react";

function Paragraph({info}) {
    return (
        <div className="paragraph">
            <div className="captionMain">
                <img src={info.image}/>
                <h2>{info.name}</h2>
            </div>
        </div>
    )
}

export default Paragraph;