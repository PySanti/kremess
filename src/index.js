import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from "./Sections/Home/Home"
import { Products } from './Sections/Products/Products';
import { Clientes } from "./Sections/Clientes/Clientes"
import { Contact} from "./Sections/Contact/Contact"
import './index.css';
import { dragFunc } from './Sections/Products/func/dragFunc';

export const mainContainerClassName = "main-container"

export const productsListClassName = "products-container__products-list"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Home/>
    <Products/>
    <Clientes/>
    <Contact/>
  </>
);

setTimeout(() => {
  dragFunc()
}, 0);