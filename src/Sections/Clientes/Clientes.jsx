import React from "react";
import "./ClientesStyles.css"
import { Client } from "../../Comps/Client/Client";

export function Clientes(){
    const imgsTrag = "./clientesLogos/"
    return (
        <section id="clientes" className="clientes-container">
            <h2 className="clientes-container__title titlebar">Donde encontrarnos</h2>
            <ul className="clientes-container__list">
                <Client img={imgsTrag+"gamma.png"}/>
                <Client img={imgsTrag+"cm.jpg"}/>
                <Client img={imgsTrag+"la-muralla.jpeg"}/>
                <Client img={imgsTrag+"luvebras.jpg"}/>
                <Client img={imgsTrag+"plaza.jpg"}/>
                <Client img={imgsTrag+"santarosa.png"}/>
                <Client img={imgsTrag+"sh.jpeg"}/>
            </ul>
        </section>
    )
}