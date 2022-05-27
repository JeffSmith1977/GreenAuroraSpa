import React, { createContext, useState }  from 'react';

export const DataContext = createContext();

const DataProvider = ({  children }) => {

    const [ carts, setCarts] = useState([]);

    const addCart = cart => {

        const exist = carts.find(item => item.idProducto === cart.idProducto);
        if(exist){
            const newCarts = carts.map(item => {
                if(item.idProducto === cart.idProducto){
                    item.cantidad += cart.cantidad;
                }
                return item;
            })
            setCarts(newCarts);
        }else
            setCarts([...carts, cart]);    

    }

    const removeCart = idProducto => {

        const newCarts = carts.filter(cart => cart.idProducto !== idProducto);

        setCarts(newCarts);
    }

    return (
        <DataContext.Provider value={{ carts, addCart, removeCart }}>
            {  children }
        </DataContext.Provider>
    )

}

export default DataProvider;
