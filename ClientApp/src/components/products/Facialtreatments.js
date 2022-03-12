import React, { useState, useEffect } from "react";
import Card from "../controls/Card";
import Loading from "../controls/Loading";

export default function Facialtreatments() {

  
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProduct = () => {

    fetch('/api/productos/get')
    .then(resp => resp.json())
    .then(data => {

      setTimeout(() => {
        
        setProductos(data);
        setLoading(false);

      }, 1000);

    })

  }

  useEffect(() => {
    loadProduct();
  });

  return (
    <div className="container">
      <div>Facialtreatments</div>

      <div className="section-title">
        <h2>Facial Treatments</h2>
        <p>Text Pending.</p>
      </div>

      <div className="row">

        <div className="accordion" id="accordionExample">

          { 

            loading ? 

            <Loading texto={'Cargando productos'} /> :

            productos.map((producto, index) => <Card product={producto} index={index} />)          

          }

        </div>
      </div>
    </div>
  );
}
