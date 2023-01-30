import React from "react";
import './ContactStyles.css'

export function Contact(props){
    return (
        <div className="contact">
            <div className="contact-title">
                Contacto  
            </div>
            <div className="contact__items-container">
                <div className="contact-item">
                    <img className="email-logo icon" src="./icons/email.webp" alt="Email : "/>
                    <div className="email-dir contact">mogasi2003@gmail.com</div>
                </div>
                <div className="contact-item">
                    <img className="ig-logo icon" src="./icons/ig.webp" alt="Instagram : "/>
                    <a className="ig-dir contact"href="https://www.instagram.com/productoskremess">@productoskremess</a>
                </div>
                <div className="contact-item">
                    <img className="phone-logo icon" src="./icons/phone.webp" alt="Movil : "/>
                    <div className="phone-number contact"> 
                        +58 412-7273323 
                    </div>
                </div>
            </div>
        </div>
    )
}