import React, { useState, useEffect } from 'react';

const useProducts = (CodCategoria) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadProduct = () => {
        fetch("/api/productos/get?CodCategoria="+CodCategoria)
            .then((resp) => resp.json())
            .then((data) => {
               
                setProductos(data);
                setLoading(false);
                
            });
    };

    useEffect(() => {
        loadProduct();
    }, [ CodCategoria ]);

    return {
        productos,
        loading
    }

}

export default useProducts;
