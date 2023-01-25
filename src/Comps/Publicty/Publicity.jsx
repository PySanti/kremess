import React from "react";
import "./PublicityStyles.css"

export function Publicity({msg}){
    msg = "<< "+msg+" >>";
    console.log(msg)
    return (
        <h2 className="publicity">{msg}</h2>
    )
}