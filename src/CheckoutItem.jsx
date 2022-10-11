import React, { useState } from 'react'
import './checkoutitem.css';
import { useStateValue } from './StateProvider';

function CheckoutItem(props) {
    const [{basket}, dispatch] =useStateValue();

    function handleQuantity(e){
        dispatch({
            type: 'quantity',
            id: props.id,
            quantity:e.target.value
        })
    }
    function handleQuantityDec(){
        dispatch({
            type: 'quantity-1',
            id: props.id
        })
    }

    const removeFromBasket = ()=>{
        // remove from basket code 
        dispatch({
            type: 'Remove_from_basket',
            id: props.id
        })
    }
    return (
        <div className='checkoutitem'>
            <img src={props.imglink} alt="" />
            <div className="item-info">
            <h3>{props.title}</h3>
            <p>{props.detail}</p>
            <span>₹{props.cost}</span>
            {/* <div><button onClick={handleQuantityDec} className="minus btn">-</button><span className='quantity'>{props.quantity}</span><button onClick={handleQuantity} className="plus btn">+</button></div> */}
            <select onChange={handleQuantity} name="Quantity" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>

            </select>
            </div>
            <button onClick={removeFromBasket} className="remove-item">Remove from basket</button>
        </div>
    )
}

export default CheckoutItem;
