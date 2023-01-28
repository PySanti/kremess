import React from "react"
import { ProductItem } from "../../Comps/ProductItem/ProductItem"
import "./ProductsStyles.css"

export function Products(){
    const mainImg="blanco.webp"
    const backImg="1.webp"
    const imgsPath = "./images/"
    return (
        <section  id="products" className="products-container">
            <div className="products-container__title titlebar">Productos</div>
            <ul className="products-container__products-list">
                <ProductItem 
                name="PAN DE SANDWICH BLANCO SIN CONCHA" 
                img={imgsPath+"/Sandwich/"+mainImg}
                backimg={imgsPath+"/Sandwich/"+backImg}
                descr="Disponible en presentacion de 600 gramos."
                type="1"
                />


                <ProductItem 
                name="EMPANADITAS DE TRIGO RELLENAS DE QUESO" 
                img={imgsPath+"/Empanadas/"+mainImg}
                backimg={imgsPath+"/Empanadas/4.webp"}
                descr="Disponible en presentacion de 36 unidades."
                type="2"
                />


                <ProductItem 
                name="MASA DE HOJALDRE" 
                img={imgsPath+"/Hojaldre/"+mainImg}
                backimg={imgsPath+"/Hojaldre/1.webp"}
                descr="Disponible en presentacion de 1 kilo."
                type="1"
                />


                <ProductItem 
                name="PALMERITAS DE HOJALDRE" 
                img={imgsPath+"/Palmeritas/"+mainImg}
                backimg={imgsPath+"/Palmeritas/3.webp"}
                descr="Disponible en presentacion de  250 gramos."
                type="2"
                />


                <ProductItem 
                name="PAN PARA PERRO CALIENTE" 
                img={imgsPath+"/Perro/"+mainImg}
                backimg={imgsPath+"/Perro/2.webp"}
                descr="Disponible en presentacion de 8 unidades (450 gramos)."
                type="1"
                />

                <ProductItem 
                name="PAN PARA HAMBURGUESA" 
                img={imgsPath+"/Hamburguesa/"+mainImg}
                backimg={imgsPath+"/Hamburguesa/2.webp"}
                descr="Disponible en presentacion de 8 unidades (600 gramos)."
                type="2"
                />


                <ProductItem 
                name="TEQUEÑOS DE HOJALDRE" 
                img={imgsPath+"/Tequenios/"+mainImg}
                backimg={imgsPath+"/Tequenios/5.webp"}
                descr="Elaborados con materia prima de optima calidad, queso blanco pasteurizado bajo en sal. Disponible en presentacion de 36, 24 y 12 unidades."
                type="1"
                />

                <ProductItem 
                name="MINI TOSTADAS" 
                img={imgsPath+"/Tostadas/"+mainImg}
                backimg={imgsPath+"/Tostadas/9.webp"}
                descr="Disponible en presentacion de 160 gramos."
                type="2"
                />

                <ProductItem 
                name="CROUTON" 
                img={imgsPath+"/Crotone/"+mainImg}
                backimg={imgsPath+"/Crotone/"+mainImg}
                descr="Disponible en presentacion de 160 gramos."
                type="1"
                />

                <ProductItem 
                name="PAN MOLIDO" 
                img={imgsPath+"/Molido/"+mainImg}
                backimg={imgsPath+"/Molido/5.webp"}
                descr="Disponible en presenacion de 300 gramos."
                type="2"
                />
            </ul>

        </section>
    )
}