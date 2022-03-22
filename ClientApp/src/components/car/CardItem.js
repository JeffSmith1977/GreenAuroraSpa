import React from 'react';

const Carditem = ({items =[]}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => ( 
                    <tr key={item.id}>
                        <td>{item.nombre}</td>
                        <td>{item.precio}</td>
                        <td>{item.cantidad}</td>
                        <td>{item.price * item.cantidad}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Carditem;
