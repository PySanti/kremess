import React from 'react';
import ReactDOM from 'react-dom/client';
import {Products} from "./Products/Products"
import {Home} from "./Home/Home"
import './index.css';
import { Clientes } from './Clientes/Clientes';
import { Recetas } from './Recetas/Recetas';
import { Contact } from './Contact/Contact';

export const mainContainerClassName = "main-container"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='main-container'>
    <Home/>
    <Products/>
    <Clientes/>
    <Recetas/>
    <Contact/>
  </div>
);

setTimeout(() => {
}, 0);