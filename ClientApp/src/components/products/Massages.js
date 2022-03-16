import React, { useState, useEffect } from "react";
import Card from "../controls/Card";
import Loading from "../controls/Loading";

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
        }, 1000);
      });
  };

  useEffect(() => {
    loadProduct();
  });

  return (
    <div className="container">

      <div className="section-title">
        <h2>Massages</h2>
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
              <div
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box iconbox-blue">
                  <div className="card h-100">
                    <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem'}}>
                      Sale
                    </div>
                    <img
                      className="card-img-top"
                      src="assets/img/massages/Reflexology.jpg"
                      alt="..."
                    />
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{producto.nombre}</h5>
                        <p>{producto.descripcionProd}</p>                        
                          $ {precio}
                        {/* <span className="text-muted text-decoration-line-through">
                            $ 60.00
                        </span> */}
                      </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a className="btn btn-outline-dark mt-auto" href="#">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
