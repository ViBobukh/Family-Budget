import React, {Component} from "react";

class DataInput extends Component{
    constructor(props){
        super(props);
        this.handlerEvent = this.handlerEvent.bind(this)
    }

    handlerEvent(event){
        this.props.addValue(this.props.id, event.currentTarget.value)
    }

    render(){
        return (
            <>
                <input type="text" placeholder="paragraph" className="dataParagraph"/>
                <input onChange={this.handlerEvent} type="number" placeholder="sum" className="dataMoney" value={this.props.value}/>
            </>
        )
    }
}

export default DataInput;