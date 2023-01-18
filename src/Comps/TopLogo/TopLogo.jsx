import React from "react"
import { Contact } from "../Contact/Contact"
import "./TopLogoStyles.css"
export function TopLogo(){
    return (
        <div className="toplogo-container">
            <Contact/>
            <img src="./images/logo.png" alt="Kremess"className="toplogo-container__img"/>
        </div>
    )
}