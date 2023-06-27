import React from "react";
import "../style.css"
import image from "../images/airbnb-logo.png";

export default function Navbar(){
    return(
        <div>
            <nav>
                <img src={image} className="nav-logo"/>
            </nav>
        </div>
    )
}
