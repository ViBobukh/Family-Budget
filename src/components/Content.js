import React, {Component} from "react";
import Element from "./Element.js"
import TotalElem from "./Total.js";
import Beauty from "../icon/beauty.svg"
import Medicine from "../icon/medicine.svg"
import Transport from "../icon/transport.svg"
import Office from "../icon/office.svg"
import Payment from "../icon/payment.svg"
import Eat from "../icon/eat.svg"
import Pet from "../icon/pet.svg"
import Entertainment from "../icon/entertainment.svg"
import Other from "../icon/other.svg"
import Total from "../icon/total.svg"

class Content extends Component{
    constructor(props){
        super(props);
        this.info = [
            {name: 'Beauty', image: Beauty},
            {name:'Medicine', image: Medicine},
            {name:'Transport', image: Transport},
            {name:'Office', image: Office},
            {name:'Payment', image: Payment},
            {name:'Eat', image: Eat},
            {name:'Pet', image: Pet},
            {name:'Entertainment', image: Entertainment},
            {name:'Other', image: Other},
            {name:'Total', image: Total}
        ];
        this.state = {
            value: 0
        };
        this.addValue = this.addValue.bind(this)
    }

    addValue(value){
        this.setState({
            value: this.state.value + Number(value)
        })
    }

    render(){
        const nameArr = this.info.map((key)=> {
            if(key.name === 'Total'){
                return <TotalElem info={key} totalValue={this.state.value}/>
            }else {
                return <Element info={key} addValue={this.addValue}/>;
            }
        });

        return (
            nameArr
        )
    }
}

export default Content;