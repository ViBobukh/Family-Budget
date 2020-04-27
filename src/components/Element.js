import React, {Component} from "react";
import Paragraph from "./Paragraph.js";
import Sign from "./Sign.js";
import DataInput from "./Input";

class Element extends Component{
    constructor(props){
        super(props);
        this.state = {
            paragraphValue: [

            ]
        };
        this.addValue = this.addValue.bind(this);
    }

    onPlus(){
        this.setState({
            paragraphValue: [...this.state.paragraphValue, {id:`${this.state.paragraphValue.length}`, value: '' }]
        })
    }

    onMinus(){
        const lastValue = this.state.paragraphValue.slice(-1)[0].value;
        this.props.addTotal(Number(lastValue), 0);
        this.setState({
            paragraphValue: this.state.paragraphValue.slice(0, -1)
        })
    }



    addValue(id, value){
        const newState = [...this.state.paragraphValue];
        newState.forEach((elem)=>{
            this.props.addTotal(Number(elem.value), Number(value));
            if(elem.id === id){
                elem.value = value;
            }
        });

        this.setState({
            paragraphValue: newState
        });
    }

    render(){
        const dataInput = this.state.paragraphValue.map((key)=>{ return <DataInput addValue={this.addValue} value={key.value} key={key.id} id={key.id} />});
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