import React, { useState, useEffect,  } from "react";

import Loading from "../controls/Loading";
import MessagesCard from "../controls/MessagesCard";

export default function Massages() {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProduct = () => {
    fetch("/api/productos/get?CodCategoria=2")
      .then((resp) => resp.json())
      .then((data) => {
        setTimeout(() => {
          setProductos(data);
          setLoading(false);
        }, 100);
      });
  };

  useEffect(() => {
    loadProduct();
  }, [0]);

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
