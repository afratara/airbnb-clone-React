import React from "react";
import "../style.css"
import star from "../images/star.png"


export default function Card(props){
    return(
        <div className="Card">
        <div className="Card-el">
            <img src={props.img} className="picture-el" />
            <div className="info-el">
                <img src={star} className="star-el"/>
                <span>{props.rating}</span>
                <span>({props.reviewCount}) .</span>
                <span>{props.location}</span>
            </div><br />
            <p className="title-el">{props.title}</p><br />
            <p><span className="price-el">From ${props.price}</span>/Person</p>

        </div>
        </div>
    )
}