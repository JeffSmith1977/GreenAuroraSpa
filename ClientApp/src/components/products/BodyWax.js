import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../context/SpaContext";
import useProducts from "../../hooks/useProducts";
import Loading from "../controls/Loading";

export default function BodyWax() {

  const { addCart } = useContext(DataContext);

  const CodCategoria = 4

  const { productos, loading } = useProducts(CodCategoria);

  return (
    <div className="container">
      <div className="section-title">
        <h2>Body Wax</h2>
        <p>Green Auro Spa Soffers treatments that strongly focus on the largest organ of your body: your skin. Our body treatments provide relaxation, detoxification through exfoliation, hydration, massage, and noticeably softer skin.</p>
      </div>

      <div className="row">
        {loading ? (
          <Loading texto={"Cargando productos"} />
        ) : (
          productos.map((producto, index) => {
            const { idProducto, nombre, descripcionProd, precioProds } = producto;

            const [precio1] = precioProds;

            const precio = precio1.precio ? precio1.precio : 0;

            const addToCart = () => {
              addCart({ idProducto, nombre, precio, cantidad: 1 });
            };

            return (
              <div key={index} className="col">
                <div className="card mb-4" style={{ minWidth: "250px" }}>
                  <div className="card-header">
                    <h4 className="my-0 text-center">{producto.nombre}</h4>
                  </div>

                  <div className="card-body text-center">
                    <h3>
                      $ {precio} <span className="text-muted"></span>
                    </h3>
                  </div>
                  <button onClick={addToCart} className="btn btn-outline-primary btn-lg-block">
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
