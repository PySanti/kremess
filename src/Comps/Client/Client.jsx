import React from "react";
import "./ClientStyles.css"



export function Client({img, re}){
    return (
        <a className="client-ref" href={re} >
            <img className="client__logo" src={img} alt="hola"/>
        </a>
    )
}