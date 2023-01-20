import React from "react";
import "./ClientStyles.css"



export function Client({img}){
    return (
        <div className="client">
            <img className="client__logo" src={img} alt="hola"/>
        </div>
    )
}