import React from "react";
import './ContactStyles.css'

export function Contact(props){
    return (
        <div className="contact-container">
            <div className="contact-container__phone">
                <img className="phone-logo icon" src="./icons/phone.png"/>
                <div className="phone-number"> 
                    +58 412-7273323 
                    0212-2580805
                </div>
            </div>
            <div className="contact-container__email">
                <img className="email-logo icon" src="./icons/email.png"/>
                <div className="email-dir">mogasi2003@gmail.com</div>
            </div>
            <div className="contact-container__ig">
                <img className="ig-logo icon" src="./icons/ig.png"/>
                <a className="ig-dir"href="https://www.instagram.com/productoskremess">@productoskremess</a>
            </div>
        </div>
    )
}