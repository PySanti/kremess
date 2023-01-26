import React from "react";
import "./HomeStyles.css"

export function Home(){
    return (
        <header className="home-container container">
            <div alt="Kremess es sinonimo de calidad" className="home-container__backimg alt-styles" />
            <p className="home-container__paraph">
                "Mas de 20 años alimentando los hogares venezolanos"
            </p>
        </header>
    )
}