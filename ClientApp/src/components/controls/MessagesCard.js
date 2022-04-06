import React, { useContext, useState } from 'react';
import { DataContext } from "../../context/SpaContext";

const MessagesCard = ({ producto }) => {

    const [precio, setPrecio] = useState(0)

    const { idProducto, nombre, precioProds, descripcionProd, descuentoProds } = producto;

    const [descuento] = descuentoProds;

    const { porcentaje } = descuento === undefined ? { porcentaje: 0 } : descuento;

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
                    {
                        porcentaje != 0 &&
                        <div
                            className="badge bg-dark text-white position-absolute"
                            style={{ top: "0.5rem", right: "0.5rem" }}
                        >
                            Discount {porcentaje}%
                        </div>
                    }
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

                                    const hasDiscount = porcentaje != "0";

                                    const newPrice = (pro.precio - (pro.precio * (porcentaje / 100)))

                                    if (!hasDiscount)
                                        return <div key={i} className='prices-messages'>
                                            <input id={`radio-${idProducto}-${pro.precio}`} type="radio" name={idProducto} onChange={() => setPrecio(pro.precio)} />
                                            <label htmlFor={`radio-${idProducto}-${pro.precio}`}>$ {pro.precio} - {pro.descripcion}</label>
                                        </div>

                                    if (hasDiscount)
                                        return <div key={i} className='prices-messages'>
                                            <input id={`radio-${idProducto}-${pro.precio}`} type="radio" name={idProducto} onChange={() => setPrecio(newPrice)} />
                                            <label htmlFor={`radio-${idProducto}-${pro.precio}`}><span className='old-price'>$ {pro.precio}</span> $ {newPrice} - {pro.descripcion}</label>
                                        </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                            <button onClick={addToCart} disabled={precio === 0} className="btn btn-primary">
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
