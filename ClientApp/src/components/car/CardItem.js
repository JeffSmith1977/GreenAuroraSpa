import React, { useContext } from 'react';
import { DataContext } from '../../context/SpaContext';

const Carditem = ({items =[]}) => {

    const { removeCart } = useContext(DataContext);   

    const total = items.reduce((acc, item) => acc + item.price, 0);

    return (
        <table style={{ width:'100%' }}>
            <thead>
                <tr>
                    <th> 
                       
                    </th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qx</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => ( 
                    <tr key={item.idProducto}>
                        <td> <button className='delete-item' onClick={() => removeCart(item.idProducto)}>
                            <i className="bi bi-phone">
                                <box-icon name='trash' ></box-icon>
                            </i>
                        </button></td>
                        <td>{item.nombre}</td>
                        <td>{item.precio}</td>
                        <td>{item.cantidad}</td>
                        <td>{item.precio * item.cantidad}</td>
                    </tr>
                ))}
            </tbody>
            
        </table>
    );
}

export default Carditem;
