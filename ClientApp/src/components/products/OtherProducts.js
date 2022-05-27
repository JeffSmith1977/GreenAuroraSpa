import React, { useContext } from 'react';
import { DataContext } from '../../context/SpaContext';
import useProducts from '../../hooks/useProducts';
import CardOher from '../controls/CardOher';
import Loading from '../controls/Loading';

const OtherProducts = () => {

    const CodCategoria = 6;

    const { addCart } = useContext(DataContext);

    const { productos, loading } = useProducts(CodCategoria);

    return (
        <div className="container">
            <h3>Extra Products</h3>
            { 

                loading ? 

                <Loading texto={'Cargando productos'} /> :

                productos.map((producto, index) => <CardOher key={index} product={producto} index={index} addCart={addCart} />)          

            }
        </div>
    );
}

export default OtherProducts;
