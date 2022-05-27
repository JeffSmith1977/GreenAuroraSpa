import React, { useState } from 'react';
import ButtonAdd from './ButtonAdd';

const CardOher = ({ product, addCart }) => {

    const { nombre, descripcionProd, precioProds, idProducto } = product;

    const [precio1] = precioProds;

    const precio = precio1.precio ? precio1.precio : 0;

    const addToCart = () => addCart({ idProducto, nombre, precio, cantidad: 1 });

    return (
        <div className="card-spa with-shadow">
            <div className="card-spa-content">
                <h4 className="card-spa-title">{nombre}
                </h4>
                <p className="card-spa-text">{descripcionProd}</p>
                <p className="card-spa-price">${parseFloat(precio).toFixed(2)}</p>
                <ButtonAdd onClick={addToCart}></ButtonAdd>
            </div>
        </div>

    );
}

export default CardOher;
