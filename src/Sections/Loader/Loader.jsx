import React from "react"
import "./LoaderStyles.css"


export function Loader(){
    return (
        <div className="loader">
            <img src="./images/logo.png" className="text-1"/>
            <div className="mid-bar"></div>
            <div className="text-2">PRODUCTOS DE CALIDAD</div>
        </div>
    )
}