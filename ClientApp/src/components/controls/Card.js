import React, { useState } from 'react';

const Card = ( { index, product } ) => {

  const [colapseId, setColapseId] = useState(1);

  const { nombre, descripcionProd, precioProds } = product;

  const [ precio1 ] = precioProds;

  const precio = precio1.precio ? precio1.precio : 0;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button onClick={() => setColapseId(1)} className={`accordion-button ${colapseId == 1 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          {nombre}
        </button>
      </h2>
      <div id="collapseOne" className={`accordion-collapse ${colapseId == 1 ? '' : 'collapse'}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <div className="card-spa">
            <img style={{ width: '100px', height: '100px' }} src="" alt="" />
            <div className="card-spa-content">
              <h4 className="card-spa-title">{nombre}
              </h4>
              <p className="card-spa-text">{descripcionProd}</p>
              <p className="card-spa-price">${ parseFloat(precio).toFixed(2)}</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;