import React from "react";
import "./MenuStyles.css"

export function Menu(){
    return (
        <div className="menu-container">
            <img className="menu-container__logo" ref="images/Logo Kremess.png" alt="espere.."/>
            <div className="menu-container__options-container">
                <a href="#home" className="menu-item">Home</a>
                <a href="#products" className="menu-item">Productos</a>
                <a href="#recetas" className="menu-item">Recetas</a>
                <a href="#clientes" className="menu-item">Clientes</a>
                <a href="#contact" className="menu-item">Contactanos</a>
            </div>
        </div>
    )
}