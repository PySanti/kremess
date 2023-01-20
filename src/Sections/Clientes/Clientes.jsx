import React from "react";
import "./ClientesStyles.css"
import { Client } from "../../Comps/Client/Client";

export function Clientes(){
    return (
        <section id="clientes" className="clientes-container">
            <h2 className="clientes-container__title title">
                Clientes
            </h2>
            <ul className="clientes-container__list">
                <Client src=""/>
                <Client src=""/>
                <Client src=""/>
                <Client src=""/>
                <Client src=""/>
                <Client src=""/>
            </ul>
        </section>
    )
}