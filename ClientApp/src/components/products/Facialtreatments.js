import React, { useState, useContext } from "react";
import { DataContext } from "../../context/SpaContext";
import useProducts from "../../hooks/useProducts";
import FacialtreatmentsCard from "../controls/FacialtreatmentsCard";
import Loading from "../controls/Loading";
import OtherProducts from "./OtherProducts";

export default function Facialtreatments() {

  return (
    <div className="divider">
      <FacialtreatmentsContent />
      <OtherProducts />
    </div>
  );
}

function FacialtreatmentsContent() {

  const { addCart } = useContext(DataContext);
  const [colapseId, setColapseId] = useState(0);
  

  const CodCategoria = 1;

  const { productos, loading } = useProducts(CodCategoria);

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

            //productos.map((producto, index) => <Card key={index} product={producto} index={index} colapseId={colapseId} setColapseId={setColapseId} addCart={addCart} />) 
            productos.map((producto, index) => <FacialtreatmentsCard key={index} product={producto} index={index} colapseId={colapseId} setColapseId={setColapseId} addCart={addCart} />)          

          }

        </div>
      </div>
    </div>
  );
}