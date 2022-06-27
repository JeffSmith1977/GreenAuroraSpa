import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DataContext } from '../../context/SpaContext';
import { getCart, round } from '../../utils/common';

const Carditem = ({items =[]}) => {

    const { removeCart } = useContext(DataContext);   

    const { total } = getCart(items);

    let history = useHistory();

    const navegateTo = (url) => history.push({ pathname : '/checkout' });  
    
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
                <button className='btn btn-primary noradio' onClick={navegateTo}>Checkout</button>
            </div>
        </div>


    );
}

export default Carditem;
