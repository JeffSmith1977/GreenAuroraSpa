import React, { useContext } from 'react';
import { DataContext } from '../../context/SpaContext';
import { round } from '../../utils/common';

const Carditem = ({items =[]}) => {

    const { removeCart } = useContext(DataContext);   

    const total=items.reduce((acumulado, actual)=>acumulado + (actual.precio * actual.cantidad), 0)
    
    return (
        <div>
            {
                items.map(item => {
                    return (
                        <div className='d-flex-between' key={item.idProducto}>
                            <div>
                                <div>{item.nombre}</div>
                                <div>{item.cantidad} x <span className='txt-bold'>${round(item.precio)}</span></div>
                            </div>
                            <div>
                                <button className='btn delete-item' onClick={() => removeCart(item.idProducto)}>
                                   x
                                </button>
                            </div>
                        </div>
                    )
                })
            }
            <div className='d-flex-between line-top'>
                <div>Sub Total</div>
                <div className=''>${round(total)}</div>
            </div>
            <div className='d-flex-between'>
                <div>Descuento</div>
                <div className=''>${round(0)}</div>
            </div>
            <div className='d-flex-between'>
                <div>Total</div>
                <div className='txt-bold'>${round(total)}</div>
            </div>
            <div className='d-flex-end'>
                <button className='btn btn-primary noradio'>Checkout</button>
            </div>
        </div>
    );
}

export default Carditem;
