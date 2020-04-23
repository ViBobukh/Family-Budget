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



function Content() {
    const info = [
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

    const nameArr = info.map((key)=> {
        if(key.name === 'Total'){
            return <TotalElem info={key}/>
        }else {
            return <Element info={key}/>;
        }
    });

    return (
        nameArr
    )
}

export default Content;