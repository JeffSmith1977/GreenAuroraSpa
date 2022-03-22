import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../context/SpaContext";
import Loading from "../controls/Loading";

export default function FacialWax() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addCart } = useContext(DataContext);

  const loadProduct = () => {
    fetch("/api/productos/get?CodCategoria=3")
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
  },[0]);

  return (
    <div className="container">
      <div className="section-title">
        <h2>Facial Wax</h2>
        <p>Waxing is a popular method of removing unwanted hair. By removing hair at the root, new hair doesn’t grow back for up to eight weeks. While waxing isn’t one of our most relaxing spa treatments, it certainly helps many of our clients look great and feel more confident.</p>
        <p>To learn more about how to get the most out of your waxing visit, simply jump to the bottom of the page.</p>
      </div>

      <div className="row">
        {loading ? (
          <Loading texto={"Cargando productos"} />
        ) : (
          productos.map((producto, index) => {
            const { id, nombre, descripcionProd, precioProds } = producto;

            const [precio1] = precioProds;

            const precio = precio1.precio ? precio1.precio : 0;

            const addToCart = () => {
              addCart({ id, nombre, precio, cantidad: 1 });
            };
            
            return (
              <div key={index} className="col">
                <div className="card mb-4" style={{ "min-width": "250px" }}>
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
