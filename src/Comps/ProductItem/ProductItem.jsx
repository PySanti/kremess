import React from "react";
import "./ProductItemStyles.css"

export function ProductItem({img, name, descr, backimg}){
    return (
        <div className="product-item">
            <div className="product-item__img-container">
                <img src={img} alt="Tenememos los productos de la mayor calidad de toda venezuela" className="product-item__img"/>
                <img src={backimg} alt="Tenemos los productos de mayor calidad de toda venezuela" className="product-item__backimg"/>
            </div>
            {/* <h2 className="product-item__name">{name}</h2>
            <p className="product-item__paraph">{descr}</p> */}
        </div>
    )
}