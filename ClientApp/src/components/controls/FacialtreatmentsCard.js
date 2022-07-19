import React, { useContext, useState } from 'react';
import { DataContext } from "../../context/SpaContext";

const FacialtreatmentsCard = ( { index, product, colapseId, setColapseId } ) => {

    const { idProducto, nombre, precioProds, descripcionProd, descuentoProds } = product;
  const precio = precioProds[0].precio;
 
  //console.log(product);
  const [descuento] = descuentoProds;
  
  const { porcentaje } = descuento === undefined ? { porcentaje: 0 } : descuento;
  const hasDiscount = porcentaje != "0";
  const newPrice = (precio - (precio * (porcentaje / 100)))
   
    const { addCart } = useContext(DataContext);

    const addToCart = () => {
        addCart({ idProducto, nombre, precio:newPrice, cantidad: 1 });
    };

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

          <img style={{ width: '100px', height: '100px' }}
            className="card-img-top"
            src={require(`../../Images/facialTreatments/${idProducto}.png`).default}
            alt="..."
          />      
              
            <div className="card-spa-content">
              <h4 className="card-spa-title">{nombre}
              </h4>
              <p className="card-spa-text">{descripcionProd}</p>
              {hasDiscount && <label htmlFor={`radio-${idProducto}-${precio}`}><span className='old-price'>$ {parseFloat(precio).toFixed(2)}</span> $ {parseFloat(newPrice).toFixed(2)}</label> } 
              {!hasDiscount && <label htmlFor={`radio-${idProducto}-${parseFloat(precio).toFixed(2)}`}> $ {parseFloat(newPrice).toFixed(2)}</label> } 
              
              <button onClick={addToCart}  className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacialtreatmentsCard;
