import React, { useState, useEffect } from "react";
import Card from "../controls/Card";
import Loading from "../controls/Loading";

export default function Facialtreatments() {

  
  const [productos, setProductos] = useState([]);
  const [colapseId, setColapseId] = useState(0);
  const [loading, setLoading] = useState(true);

  const loadProduct = () => {

    fetch('/api/productos/get?CodCategoria=1')
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
     
      <div className="section-title">
        <h2>Facial Treatments</h2>
        <p>The stress of daily life affects your skin. Green Aura Spa’s knowledgeable Estheticians offer award-winning facials that reveal your best skin while offering up a moment of protected time to yourself.  Our licensed skincare experts will work with you to address your skin concerns, whether you’re looking to address acne, congestion, anti-aging, moisture imbalances, collagen production, and more.</p>
        <p>Each facial treatment is customized to your goals, needs, and unique skin type. For the best facial in New York, Fort Worth — visit Gren Aura spa near you. Choose from a wide variety of facial services including: Green Aura Signature Facial, Dermaplaning Facial, Crystal Microdermabrasion Facial, Chemical Peel and LED Light Therapy Peel. </p>
      </div>

      <div className="row">

        <div className="accordion" id="accordionExample">

          { 

            loading ? 

            <Loading texto={'Cargando productos'} /> :

            productos.map((producto, index) => <Card product={producto} index={index} colapseId={colapseId} setColapseId={setColapseId} />)          

          }

        </div>
      </div>
    </div>
  );
}
