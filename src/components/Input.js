import React, {Component} from "react";

function DataInput() {
    return (
        <>
            <input type="text" placeholder="paragraph" className="dataParagraph"/>
            <input type="text" placeholder="sum" className="dataMoney" data-current-value="0"/>
        </>
    )
}

function DataInputs(props) {
    let inputsArr = [];
    for(let i = 0; i < props.counter; ++i){
        inputsArr.push(<DataInput/>)
    }

    return(
        <div className='dataInput'>
            {inputsArr}
        </div>
    );
}

export default DataInputs;