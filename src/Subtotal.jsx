import React from 'react'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import './subtotal.css';

function Subtotal() {
    const [{basket},dispatch] = useStateValue();
    // console.log(getBasketTotal(basket),"total");

    return (
        
        <div className="subtotal">
            <p>Subtotal({basket.length} items):<strong>₹{getBasketTotal(basket)}</strong></p>
            <p><input type="checkbox" name="checkbox" id="" />This item contains a gift</p>
            <button className="procceed-checkout">Proceed to checkout</button>
        </div>
    )
}

export default Subtotal;
