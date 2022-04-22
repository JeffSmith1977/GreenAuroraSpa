import React, { useState } from 'react';

const FacialtreatmentsCard = ( { index, product, colapseId, setColapseId, addCart } ) => {

  
  const { nombre, descripcionProd, precioProds, idProducto } = product;

  const [ precio1 ] = precioProds;

  const precio = precio1.precio ? precio1.precio : 0;

  const addToCart = () => addCart({ idProducto, nombre, precio, cantidad: 1 });

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">        
        <button onClick={() => setColapseId(index)} className={`accordion-button ${colapseId == index ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          {nombre}
        </button>
      </h2>
      <div id="collapseOne" className={`accordion-collapse ${colapseId == index ? '' : 'collapse'}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <div className="card-spa">
            <img style={{ width: '100px', height: '100px' }} src="" alt="" />
            <div className="card-spa-content">
              <h4 className="card-spa-title">{nombre}
              </h4>
              <p className="card-spa-text">{descripcionProd}</p>
              <p className="card-spa-price">${ parseFloat(precio).toFixed(2)}</p>
              <button onClick={addToCart}  className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacialtreatmentsCard;
