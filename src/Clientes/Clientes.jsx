import React from "react";
import "./ClientesStyles.css"

export function Clientes(){
    return (
        <div id="clientes" className="clientes-container">
            <h2 className="clientes-container__title title">
                Clientes
            </h2>
            <ul className="clientes-container__list">
            </ul>
        </div>
    )
}