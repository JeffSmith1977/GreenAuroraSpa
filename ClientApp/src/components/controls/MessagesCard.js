import React, { useContext, useState } from 'react';
import { DataContext } from "../../context/SpaContext";

const MessagesCard = ({ producto }) => {

    const [ precio, setPrecio ] = useState(0)

    const { idProducto, nombre, precioProds, descripcionProd } = producto;

    const { addCart } = useContext(DataContext);

    const addToCart = () => {
        addCart({ idProducto, nombre, precio, cantidad: 1 });
    };    

    return (
        <div
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
                        src={require(`../../Images/${idProducto}.png`).default}
                        alt="..."
                    />
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder">{nombre}</h5>
                            <p>{descripcionProd}</p>
                            {
                                precioProds.map((pro, i) => {
                                    return <div key={i} className='prices-messages'>
                                        <input type="radio" name={idProducto} onChange={() => setPrecio(pro.precio)} />
                                        <p>$ {pro.precio} - {pro.descripcion}</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                            <button onClick={addToCart} disabled={precio === 0 } className="btn btn-primary">
                            {precio === 0 ? 'Select a product' : 'Add to cart'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default MessagesCard;
