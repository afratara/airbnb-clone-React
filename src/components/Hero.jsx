import React from "react";
import "../style.css"
import image from "../images/photo-grid.png"

export default function Hero(){
    return(
        <div className="hero">
            <img src={image} className="grid-img"/>
            <h1 className="head-el">Online Experiences</h1>
            <p className="para-el">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}