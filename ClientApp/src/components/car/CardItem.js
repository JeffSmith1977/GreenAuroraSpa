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
                        <div className='d-flex-between'>
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
                <div>Total</div>
                <div className='txt-bold'>${round(total)}</div>
            </div>
            <div className='d-flex-end'>
                <button className='btn btn-primary noradio'>Checkout</button>
            </div>
        </div>


        // <table style={{ width:'100%' }}>
        //     <thead>
        //         <tr>
        //             <th> 
                       
        //             </th>
        //             <th>Product</th>
        //             <th>Price</th>
        //             <th>Qx</th>
        //             <th>Total</th>
        //         </tr>    

        //     </thead>
        //     <tbody>
        //         {items.map(item => ( 
        //             <tr key={item.idProducto}>
        //                 <td> <button className='delete-item' onClick={() => removeCart(item.idProducto)}>
        //                     <i className="bi bi-phone">
        //                         <box-icon name='trash' ></box-icon>
        //                     </i>
        //                 </button></td>
        //                 <td>{item.nombre}</td>
        //                 <td>$ {round(item.precio)}</td>
        //                 <td>{item.cantidad}</td>
        //                 <td>$ {round(item.precio * item.cantidad)}</td>
        //             </tr>

        //         ))}
        //     </tbody>
            
        //     <tfoot>
        //         <tr>
        //             <td></td>
        //             <td>Total to pay:</td>
        //             <td>$ {round(total)}</td>
        //         </tr>                
        //     </tfoot>
        // </table>
    );
}

export default Carditem;
