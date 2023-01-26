import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from "./Sections/Home/Home"
import { Products } from './Sections/Products/Products';
import { Clientes } from "./Sections/Clientes/Clientes"
import './index.css';
import {ContactContainer} from "./Sections/ContactContainer/ContactContainer"
import { activateProducts } from './Sections/Products/func/activateProducts';


export const productItemClassName           = "product-item"
export const productItemACTIVATEDClassName  = "product-item__ACTIVATED"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Home/>
    <Products/>
    <Clientes/>
    <ContactContainer/>
  </>
);

setTimeout(() => {
  activateProducts(productItemClassName)
}, 0);