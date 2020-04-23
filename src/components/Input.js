import React, {Component} from "react";

class DataInput extends Component{
    constructor(props){
        super(props);
    }

    handlerEvent(event){
        this.setState({
            value: (event.currentTarget.value > 0) ? this.state.value - this.state.value + Number(event.currentTarget.value) : this.state.value
        });
    }

    render(){
        return (
            <>
                <input type="text" placeholder="paragraph" className="dataParagraph"/>
                <input onInput={this.handlerEvent.bind(this)} type="number" placeholder="sum" className="dataMoney" value={this.props.value} />
            </>
        )
    }
}

export default DataInput;