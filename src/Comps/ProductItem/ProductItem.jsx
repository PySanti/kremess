import React from "react";
import "./ProductItemStyles.css"

export function ProductItem({img, name, descr}){
    return (
        <div className="product-item">
            <img src={img} alt="Tenememos los productos de la mayor calidad de toda venezuela" className="product-item__img"/>
            <h2 className="product-item__name">{name}</h2>
            <p className="product-item__paraph">{descr}</p>
        </div>
    )
}