import React, { Component } from "react";
import img from "../icon/family.svg"

function Header() {
    return (
        <h1>
            Family Budget
            <img src={img} alt="Family"/>
        </h1>
    )
}

export default Header;