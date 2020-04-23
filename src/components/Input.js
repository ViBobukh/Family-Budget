import React, {Component} from "react";

function DataInput(props) {
    return (
        <>
            <input type="text" placeholder="paragraph" className="dataParagraph"/>
            <input onChange={props.addValue} type="number" placeholder="sum" className="dataMoney" data-current-value="0"/>
        </>
    )
}

function DataInputs(props) {
    let inputsArr = [];
    for(let i = 0; i < props.counter; ++i){
        inputsArr.push(<DataInput addValue={props.addValue}/>)
    }

    return(
        <div className='dataInput'>
            {inputsArr}
        </div>
    );
}

export default DataInputs;