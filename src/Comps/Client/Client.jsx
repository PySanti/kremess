import React from "react";
import "./ClientStyles.css"



export function Client({img, re}){
    return (
        <a className="client-ref" target="__BLANK" href={re} >
            <img className="client__logo" src={img} alt="Estamos ubicados en casi todos los mercados de Caracas."/>
        </a>
    )
}