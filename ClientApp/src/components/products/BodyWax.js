import React, { useState, useEffect } from "react";
import Card from "../controls/Card";
import Loading from "../controls/Loading";

export default function BodyWax() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProduct = () => {
    fetch("/api/productos/get?CodCategoria=4")
      .then((resp) => resp.json())
      .then((data) => {
        setTimeout(() => {
          setProductos(data);
          setLoading(false);
        }, 1000);
      });
  };

  useEffect(() => {
    loadProduct();
  });

  return (
    <div className="container">
      <div className="section-title">
        <h2>Body Wax</h2>
        <p>Text Pending.</p>
      </div>

      <div className="row">
        {loading ? (
          <Loading texto={"Cargando productos"} />
        ) : (
          productos.map((producto, index) => {
            const { nombre, descripcionProd, precioProds } = producto;

            const [precio1] = precioProds;

            const precio = precio1.precio ? precio1.precio : 0;
            return (
              <div className="col">
                <div className="card mb-4" style={{ "min-width": "250px" }}>
                  <div className="card-header">
                    <h4 className="my-0 text-center">{producto.nombre}</h4>
                  </div>

                  <div className="card-body text-center">
                    <h3>
                      $ {precio} <span className="text-muted"></span>
                    </h3>
                  </div>
                  <button className="btn btn-outline-primary btn-lg-block">
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
