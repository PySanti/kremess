import React from "react"
import { ProductItem } from "../../Comps/ProductItem/ProductItem"
import "./ProductsStyles.css"

export function Products(){
    return (
        <section  id="products" className="products-container">
            <h2 className="products-container__title title">
                Productos
            </h2>
            <ul className="products-container__products-list">
                <ProductItem 
                name="Pan de sandwich" 
                backimg="./images/Pan de sandwich/1.jpg"
                img="./images/Pan de sandwich/blanco.jpg" 
                descr="el mejor pan de sandwich de venezuela"
                />

                <ProductItem 
                name="Empanadas" 
                backimg="./images/Empanadas/1.jpg"
                img="./images/Empanadas/blanco.jpg" 
                descr="las mejores empanaditas"/>

                <ProductItem 
                name="Masa de hojaldre" 
                backimg="./images/Masa de Hojaldre/1.jpg"
                img="./images/Masa de Hojaldre/blanco.jpg" 
                descr="la unica masa de hojaldre de calidad del mercado"/>

                <ProductItem 
                name="Palmeritas" 
                backimg="./images/Palmeritas/1.jpg"
                img="./images/Palmeritas/blanco.jpg" 
                descr="Las palmeritas mas ricas del universo"/>

                <ProductItem 
                name="Pan de perro caliente" 
                backimg="./images/Pan de perro/1.jpg"
                img="./images/Pan de perro/blanco.jpg" 
                descr="El pan de perro que nadie tiene"/>

                <ProductItem 
                name="Pan de Hamburguesa" 
                backimg="./images/Pan Hamburguesa/1.jpg"
                img="./images/Pan Hamburguesa/blanco.jpg" 
                descr="El mejor pan de hamburguesa del mundo"/>

                <ProductItem 
                name="Tequenios" 
                img="./images/Tequenios/blanco.jpg" 
                backimg="./images/Tequenios/1.jpg"
                descr="El mejor pan de hamburguesa del mundo"/>

                <ProductItem 
                name="Tostadas" 
                img="./images/Tostadas/blanco.jpg" 
                backimg="./images/Tostadas/1.jpg"
                descr="Las mejores tostadas del mundo "/>

                <ProductItem 
                name="Crotone" 
                img="./images/Crotone/blanco.jpg" 
                backimg="./images/Crotone/blanco.jpg"
                descr="Las mejores tostadas del mundo "/>

                <ProductItem 
                name="Pan molido" 
                img="./images/Pan molido/blanco.jpg" 
                backimg="./images/Pan molido/1.jpg"
                descr="Las mejores tostadas del mundo "/>
            </ul>

        </section>
    )
}