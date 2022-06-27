import React, { useContext } from 'react';
import { DataContext } from '../context/SpaContext';
import { getCart, round } from '../utils/common';

const Checkout = () => {

    const { carts } = useContext(DataContext);

    const { total } = getCart(carts);

    const styleTd = { paddingTop: '10px' };
    const tbodyBt = { borderTopWidth: '1px',  borderTopStyle: 'solid', borderTopColor: '#dadada' };
    const Fsize = { fontSize: '22px' };
    const textAling = { textAlign: 'right' };

    return (
        <div class="checkout block">
            
            <div class="container">
                <div class="row">
                    <div class="col-12 mb-3">
                        <div class="page-header__title"><h1>Checkout</h1></div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-7">
                        <div class="card mb-lg-0">
                            <div class="card-body">
                                <h3 class="card-title">Billing details</h3>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="checkout-first-name">Name</label>
                                        <input type="text" class="form-control" id="checkout-first-name" placeholder="Name" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="checkout-country">Sex</label>
                                        <select id="checkout-country" class="form-control" tabindex="-1" aria-hidden="true">
                                            <option value='1' >Masculino</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="checkout-email">Email address</label>
                                        <input type="email" class="form-control" id="checkout-email" placeholder="Email address"/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="checkout-phone">Phone</label>
                                        <input type="text" class="form-control" id="checkout-phone" placeholder="Phone"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <label for="checkout-comment">Order notes <span class="text-muted">(Optional)</span></label> 
                                        <textarea id="checkout-comment" class="form-control" rows="4"></textarea>
                                    </div>
                                </div>
                            </div>                           
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-5 mt-4 mt-lg-0">
                        <div class="card mb-0">
                            <div class="card-body">
                                <h3 class="card-title">Your Order</h3>
                                <table class="checkout__totals" style={{ width:'100%' }}>
                                    <thead class="checkout__totals-header">
                                        <tr><th>Product</th><th style={textAling}>Total</th></tr>
                                    </thead>
                                    <tbody class="checkout__totals-products">
                                    {
                                        carts.map(item => {
                                            return (
                                                <tr><td>{item.nombre} × {item.cantidad}</td><td style={textAling}>${round(item.precio)}</td></tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                    <tbody class="checkout__totals-subtotals" style={tbodyBt}>
                                        <tr><th style={styleTd}>Subtotal</th><td style={{...styleTd,...textAling}}>${round(total)}</td></tr>
                                        <tr><th>Store Credit</th><td style={textAling}>$0.00</td></tr>
                                        <tr><th>Shipping</th><td style={textAling}>$0.00</td></tr>
                                    </tbody>
                                    <tfoot class="checkout__totals-footer"  style={tbodyBt}>
                                        <tr><th style={{...styleTd,...Fsize}}>Total</th><td style={{...styleTd,...Fsize, ...textAling}}>${round(total)}</td></tr>
                                    </tfoot>
                                </table>
                                <div class="checkout__agree form-group">
                                    <div class="form-check">
                                        <span class="form-check-input input-check">
                                            <span class="input-check__body">
                                                <input class="input-check__input" type="checkbox" id="checkout-terms"/> 
                                                <span class="input-check__box"></span> 
                                                <svg class="input-check__icon" width="9px" height="7px"><use href="images/sprite.svg#check-9x7"></use></svg> 
                                            </span>
                                        </span>
                                        <label class="form-check-label" for="checkout-terms">I have read and agree to the website <a target="_blank" href="terms-and-conditions.html">terms and conditions</a>*</label>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary btn-xl btn-block">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
