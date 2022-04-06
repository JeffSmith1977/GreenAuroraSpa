import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../context/SpaContext";
import useProducts from "../../hooks/useProducts";
import Loading from "../controls/Loading";
import MessagesCard from "../controls/MessagesCard";

export default function Massages() {

  const { addCart } = useContext(DataContext);

  const CodCategoria = 2

  const { productos, loading } = useProducts(CodCategoria);


  return (
    <div className="container">
      <div className="section-title">
        <h2>Massages</h2>
        <p>
          If you’re looking for a relaxing massage near you, we have Green Aura
          Spa a convenient locations in New York. We offer several types of
          massage treatments, and each can be customized with a variety of
          enhancements to suit your unique needs.
        </p>
      </div>

      <div className="row">
        {loading ? (
          <Loading texto={"Cargando productos"} />
        ) : (
          productos.map((producto, index) => <MessagesCard key={index} producto={producto}/>)
        )
      }
      </div>
    </div>
  );
}
