import React, { createContext, useState }  from 'react';

export const DataContext = createContext();

const DataProvider = ({  children }) => {

    const [ carts, setCarts] = useState([]);

    const addCart = cart => {
        setCarts([...carts, cart]);    
    }

    const removeCart = id => {

        const newCarts = carts.filter(cart => cart.id !== id);

        setCarts(newCarts);
    }

    return (
        <DataContext.Provider value={{ carts, addCart, removeCart }}>
            {  children }
        </DataContext.Provider>
    )

}

export default DataProvider;
