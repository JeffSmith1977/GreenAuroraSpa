import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../context/SpaContext";
import Loading from "../controls/Loading";

export default function Massages() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addCart } = useContext(DataContext);

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
          productos.map((producto, index) => {
            const { id, nombre, descripcionProd, precioProds } = producto;

            const [precio1] = precioProds;

            const precio = precio1.precio ? precio1.precio : 0;

            const addToCart = () => {
              addCart({ id, nombre, precio, cantidad: 1 });
            };
            //console.log(producto);
            return (
              <div
                key={index}
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box iconbox-blue">
                  <div className="card h-100">
                    <div
                      className="badge bg-dark text-white position-absolute"
                      style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                      Sale
                    </div>
                    <img
                      className="card-img-top"                      
                      src={require(`../../Images/${producto.idProducto}.png`).default}
                      alt="..."
                    />
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{producto.nombre}</h5>
                        <p>{producto.descripcionProd}</p>$ {precio}
                        {/* <span className="text-muted text-decoration-line-through">
                            $ 60.00
                        </span> */}
                      </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <button onClick={addToCart} className="btn btn-primary">
                          Add to Cart
                        </button>
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
