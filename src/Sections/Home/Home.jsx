import React from "react";
import "./HomeStyles.css"

export function Home(){
    return (
        <header className="home-container container">
            <img src="./images/Empanadas/1.jpg" className="home-container__backimg" alt=""/>
            <p className="home-container__paraph">
                "Mas de 20 anios haciendo el mejor pan de Venezuela"
            </p>
        </header>
    )
}