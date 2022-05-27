import React from 'react';

const ButtonAdd = ({ onClick }) => {
    return (
            <button className="btn btn-primary" onClick={onClick}>
                Add to cart
                <i className="bx bx-hot txt-white">
                    <box-icon name='cart'></box-icon>
                </i>
            </button>
    );
}

export default ButtonAdd;
