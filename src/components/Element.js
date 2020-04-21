import React, {Component} from "react";
import Paragraph from "./Paragraph.js";
import Sign from "./Sign.js";
import DataInputs from "./Input.js"

class Element extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }

    onPlus(){
        this.setState({
            counter: this.state.counter + 1
        })
    }

    onMinus(){
        this.setState({
            counter: (this.state.counter > 0) ? this.state.counter - 1 : this.state.counter
        })
    }

    render(){
        return(
            <div className="paragraph">
                <Paragraph info={this.props.info}/>
                <Sign onPlus={this.onPlus.bind(this)} onMinus={this.onMinus.bind(this)}/>
                <DataInputs counter={this.state.counter}/>
            </div>
        )
    }

}



export default Element;
