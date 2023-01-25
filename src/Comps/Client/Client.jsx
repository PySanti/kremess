import React from "react";
import "./ClientStyles.css"



export function Client({img}){
    return (
        <img className="client__logo" src={img} alt="hola"/>
    )
}