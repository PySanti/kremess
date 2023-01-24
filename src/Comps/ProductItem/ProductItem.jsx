import React from "react";
import "./ProductItemStyles.css"


export function ProductItem({img, name, descr, type}){
    const style = {
        backgroundImage : `url(${img})`,
        backgroundSize : "contain"
    }
    return (
        <div className={"product-item t"+type} >
            <div style={style} alt="Tenememos los productos de la mayor calidad de toda venezuela" className="product-item__img parallax"/>
            <div className="product-item__content">
                <h2 className="product-item__name">{name}</h2>
                <p className="product-item__paraph">{descr}</p>
            </div>
        </div>
    )
}