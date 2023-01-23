import React from "react"
import { ProductItem } from "../../Comps/ProductItem/ProductItem"
import "./ProductsStyles.css"

export function Products(){
    const mainImg="blanco.jpg"
    const backImg="1.jpg"
    const imgsPath = "./images/"
    return (
        <section  id="products" className="products-container">
            <div className="products-container__title">Productos</div>
            <ul className="products-container__products-list">
                <ProductItem 
                name="Pan de sandwich Blanco Sin Concha" 
                img={imgsPath+"/Sandwich/"+mainImg}
                descr="Disponible en presentacion de 600 gramos."
                type="1"
                />

                <ProductItem 
                name="Empanaditas de trigo rellenas de queso" 
                img={imgsPath+"/Empanadas/"+mainImg}
                descr="Disponible en presentacion de 36 unidades."
                type="2"
                />

                <ProductItem 
                name="Masa de hojaldre" 
                img={imgsPath+"/Hojaldre/"+mainImg}
                descr="Disponible en presentacion de 1 kilo."
                type="1"
                />

                <ProductItem 
                name="Palmeritas de hojaldre horneados" 
                img={imgsPath+"/Palmeritas/"+mainImg}
                descr="Disponible en presentacion de  250 gramos."
                type="2"
                />

                <ProductItem 
                name="Pan de perro caliente" 
                img={imgsPath+"/Perro/"+mainImg}
                descr="Disponible en presentacion de 8 unidades (450 gramos)."
                type="1"
                />

                <ProductItem 
                name="Pan de Hamburguesa" 
                img={imgsPath+"/Hamburguesa/"+mainImg}
                descr="Disponible en presentacion de 8 unidades (600 gramos)."
                type="2"
                />

                <ProductItem 
                name="Tequenios" 
                img={imgsPath+"/Tequenios/"+mainImg}
                descr="Elaborados con materia prima de optima calidad, queso blanco pasteurizado bajo en sal. Disponible en presentacion de 36, 24 y 12 unidades."
                type="1"
                />

                <ProductItem 
                name="Mini Tostadas" 
                img={imgsPath+"/Tostadas/"+mainImg}
                descr="Disponible en presentacion de 160 gramos."
                type="2"
                />

                <ProductItem 
                name="Crotone" 
                img={imgsPath+"/Crotone/"+mainImg}
                descr="Disponible en presentacion de 160 gramos."
                type="1"
                />

                <ProductItem 
                name="Pan molido" 
                img={imgsPath+"/Molido/"+mainImg}
                descr="Disponible en presenacion de 300 gramos."
                type="2"
                />
            </ul>

        </section>
    )
}