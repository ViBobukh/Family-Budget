import React, { Component } from "react";
import ReactDOM from "react-dom";
import img from "../icon/family.svg"

import '../style/Header.css';

function Header() {
    return (
        <h1>
            Family Budget
            <img src={img} alt="Family"/>
        </h1>
    )
}

export default Header;