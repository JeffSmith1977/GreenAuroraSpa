export const round = value => parseFloat(Math.round(value * 100) / 100).toFixed(2);

export const getCart = (items = []) => {

    const subtotal = items.reduce((acumulado, actual)=>acumulado + (actual.precio * actual.cantidad), 0);
    const descuento = 0;
    const total = subtotal - descuento;

    return{
        subtotal,
        descuento,
        total
    }

}