import React, {Component} from "react";
import Paragraph from "./Paragraph.js";
import Sign from "./Sign.js";
import DataInput from "./Input";

class Element extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            paragraphValue: [
                {paragraph:'', value: '' }
            ]

        };
    }

    onPlus(){
        this.setState({
            paragraphValue: [...this.state.paragraphValue, {paragraph:`${this.props.info.name}`, value: '' }]
        })
    }

    onMinus(){
        this.setState({
            paragraphValue: this.state.paragraphValue.slice(-1)
        })
    }

    render(){
        const dataInput = this.state.paragraphValue.map((key)=>{ return <DataInput value={key.value} />});
        return(
            <div className="paragraph">
                <Paragraph info={this.props.info}/>
                <Sign onPlus={this.onPlus.bind(this)} onMinus={this.onMinus.bind(this)}/>
                <div className='dataInput'>
                    {dataInput}
                </div>
            </div>
        )
    }

}

export default Element;