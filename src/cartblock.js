import React from 'react';
import CartCard from './cartCard';
export default function Cartblock({ status, items, finaltotal, handleclose, handlecalc }) {

    return (
        <div className={`Cartbox ${status ? 'cart-side-box' : 'close-side-box'}`}>
            <div className="container-fluid">
                <div className={items.length === 0 ? 'row noItemsrow' : 'row'}>
                    <div className={items.length === 0 ? 'col-12 noItems' : 'col-12'} >
                        <h4>{items.length === 0 ? 'No items in the cart' : items.length + 'items'}  </h4>
                    </div>
                </div>
                <div>
                    {items.map((obj) => {
                        return <CartCard key={obj.id} data={obj} handlecartclose={handleclose} calc={handlecalc()} />
                    })}
                </div>
                {items.length === 0 ? '' :
                    < div className="totalvalue row">
                        <div className="subtotalvalue">{items.length === 0 ? '' : 'Sub-total: '}<span className="subtotal">Rs. {finaltotal}</span></div>
                        <div className="checkoutbtn"><button className="btn btn-outline-danger">Check out</button></div>
                    </div>
                }
            </div>

        </div >
    )
}