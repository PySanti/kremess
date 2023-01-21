import React from "react"
import { ProductItem } from "../../Comps/ProductItem/ProductItem"
import "./ProductsStyles.css"

export function Products(){
    return (
        <section  id="products" className="products-container">

            <ul className="products-container__products-list">
                <ProductItem 
                name="Pan de sandwich Blanco Sin Concha" 
                backimg="./images/Pan de sandwich/1.jpg"
                img="./images/Pan de sandwich/trans.png" 
                descr="Disponible en presentacion de 600 gramos."
                className="pan-de-sandwich"
                />

                <ProductItem 
                name="Empanaditas de trigo rellenas de queso" 
                backimg="./images/Empanadas/1.jpg"
                img="./images/Empanadas/trans.png" 
                descr="Disponible en presentacion de 36 unidades."
                className="empanadas"
                />

                <ProductItem 
                name="Masa de hojaldre" 
                backimg="./images/Masa de Hojaldre/1.jpg"
                img="./images/Masa de Hojaldre/trans.png" 
                descr="Disponible en presentacion de 1 kilo."
                className="masa-de-hojaldre"
                />

                <ProductItem 
                name="Palmeritas de hojaldre horneados" 
                backimg="./images/Palmeritas/1.jpg"
                img="./images/Palmeritas/trans.png" 
                descr="Disponible en presentacion de  250 gramos."
                className="palmeritas"
                />

                <ProductItem 
                name="Pan de perro caliente" 
                backimg="./images/Pan de perro/1.jpg"
                img="./images/Pan de perro/trans.png" 
                descr="Disponible en presentacion de 8 unidades (450 gramos)."
                className="pan-de-perro"
                />

                <ProductItem 
                name="Pan de Hamburguesa" 
                backimg="./images/Pan Hamburguesa/1.jpg"
                img="./images/Pan Hamburguesa/trans.png" 
                descr="Disponible en presentacion de 8 unidades (600 gramos)."
                className="pan-de-hamburguesa"
                />

                <ProductItem 
                name="Tequenios" 
                img="./images/Tequenios/trans.png" 
                backimg="./images/Tequenios/1.jpg"
                descr="Elaborados con materia prima de optima calidad, queso blanco pasteurizado bajo en sal. Disponible en presentacion de 36, 24 y 12 unidades."
                className="tequenios"
                />

                <ProductItem 
                name="Mini Tostadas" 
                img="./images/Tostadas/trans.png" 
                backimg="./images/Tostadas/1.jpg"
                descr="Disponible en presentacion de 160 gramos."
                className="tostadas"
                />

                <ProductItem 
                name="Crotone" 
                img="./images/Crotone/trans.png" 
                backimg="./images/Crotone/blanco.jpg"
                descr="Disponible en presentacion de 160 gramos."
                className="crotone"
                />

                <ProductItem 
                name="Pan molido" 
                img="./images/Pan molido/trans.png" 
                backimg="./images/Pan molido/1.jpg"
                descr="Disponible en presenacion de 300 gramos."
                className="pan-molido"
                />
            </ul>

        </section>
    )
}