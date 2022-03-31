import React, { createContext, useState }  from 'react';

export const DataContext = createContext();

const DataProvider = ({  children }) => {

    const [ carts, setCarts] = useState([]);

    const addCart = cart => {
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
