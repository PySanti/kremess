import React from "react"
import { Contact } from "../../Comps/Contact/Contact"
import "./ContactContainerStyles.css"


export function ContactContainer(){
    return (
        <footer className="contact-container">
            <Contact/>
            <img src="./images/logo.webp" alt="Puedes contactarnos por nuestras diferentes fuentes."className="contact-container__img"/>
        </footer>
    )
}