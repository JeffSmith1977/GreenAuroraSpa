import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../context/SpaContext";
import useProducts from "../../hooks/useProducts";
import Loading from "../controls/Loading";

export default function FacialWax() {
  
  const { addCart } = useContext(DataContext);

  const CodCategoria = 3

  const { productos, loading } = useProducts(CodCategoria);

  return (
    <div className="container">
      <div className="section-title">
        <h2>Facial Wax</h2>
        <p>
          Waxing is a popular method of removing unwanted hair. By removing hair
          at the root, new hair doesn’t grow back for up to eight weeks. While
          waxing isn’t one of our most relaxing spa treatments, it certainly
          helps many of our clients look great and feel more confident.
        </p>
        <p>
          To learn more about how to get the most out of your waxing visit,
          simply jump to the bottom of the page.
        </p>
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
                  <button
                    onClick={addToCart}
                    className="btn btn-outline-primary btn-lg-block"
                  >
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
