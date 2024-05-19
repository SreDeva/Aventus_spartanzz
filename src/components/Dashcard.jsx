import React from "react";
import "./Dashcard.css"

function Dashcard(props){
    return (
        <div className="cardmain">
            <div className="cardcontent">{props.content}</div>
        </div>
    )
}