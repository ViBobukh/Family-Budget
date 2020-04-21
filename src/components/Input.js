import React from "react";

function DataInput() {
    return (
        <div className="dataInput">
            <input type="text" placeholder="paragraph" className="dataParagraph"/>
            <input type="text" placeholder="sum" className="dataMoney" data-current-value="0"/>
        </div>
    )
}

export default DataInput;