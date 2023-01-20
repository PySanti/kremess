import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from "./Sections/Home/Home"
import { Products } from './Sections/Products/Products';
import { Clientes } from "./Sections/Clientes/Clientes"
import './index.css';
import { dragFunc } from './Sections/Products/func/dragFunc';
import { PublicityMsg } from './Comps/PublicityMsg/PublicityMsg';
import { TopLogo } from './Comps/TopLogo/TopLogo';
import { topLogoScrollEfect } from './Comps/TopLogo/func/topLogoScrollEfect';

export const mainContainerClassName = "main-container"

export const productsListClassName = "products-container__products-list"
export const productItemClassName = "product-item"
export const topLogoClassName = "toplogo-container"
export const topLogoACTIVATED = "toplogo-container__ACTIVATED"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Home/>
    <TopLogo/>
    <Products/>
    <PublicityMsg/>
    <Clientes/>
  </>
);

setTimeout(() => {
  dragFunc()
  topLogoScrollEfect()
}, 0);