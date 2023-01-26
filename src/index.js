import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from "./Sections/Home/Home"
import { Products } from './Sections/Products/Products';
import { Clientes } from "./Sections/Clientes/Clientes"
import './index.css';
import {ContactContainer} from "./Sections/ContactContainer/ContactContainer"
import { activateProducts } from './Sections/Products/func/activateProducts';
import { loadScreen } from './loadScreen';
import { Loader } from './Sections/Loader/Loader';


export const productItemClassName           = "product-item"
export const productItemACTIVATEDClassName  = "product-item__ACTIVATED"
export const loaderClassName                = "loader"
export const loaderDEACTIVATEDClassName     = "loader__DEACTIVATED"
export const mainContainerClassName         = "main-container"
export const mainContainerActivated         = "main-container__ACTIVATED"
export const bodyLoadedClassName            = "body-loaded"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Loader/>
    <div className="main-container">
      <Home/>
      <Products/>
      <Clientes/>
      <ContactContainer/>
    </div>
  </>
);

setTimeout(() => {
  loadScreen()
  activateProducts(productItemClassName)
}, 0);