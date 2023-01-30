import React from "react";
import "./ProductItemStyles.css"



export function ProductItem({img, name, descr, type, backimg}){
    return (
        <div  className={`product-item t${type}`} >
            <img alt="Tenememos los productos de la mayor calidad de toda venezuela" src={backimg} className="product-item__backimg"/>
            <img src={img} alt="Tenememos los productos de la mayor calidad de toda venezuela" className="product-item__img"/>
            <div className="product-item__content">
                <h2 className="product-item__name title">{name}</h2>
                <p className="product-item__paraph">{descr}</p>
            </div>
        </div>
    )
}