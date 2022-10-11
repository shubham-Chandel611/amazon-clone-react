import React from "react";
import { useStateValue } from "./StateProvider";
import "./checkout.css";
import CheckoutItem from "./CheckoutItem";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="left-checkout">
        <img className="checkout-ad" src="/images/checkout-image.jpg" alt="" />
        {basket.length > 0 ? (
          <div>
            <h2 className="cart-msg">Your amazon basket</h2>
            {basket.map((item) => (
              <CheckoutItem
                id={item.id}
                title={item.title}
                imglink={item.imglink}
                cost={item.cost}
                detail={item.detail}
                quantity={item.quantity}
              />
            ))}
          </div>
        ) : (
          <div>
            <h2 className="cart-msg">Your amazon basket is empty</h2>
            <p>
              To add items to your basket, just click 'Add to basket' button on
              you desired product.
            </p>
          </div>
        )}
      </div>
      {basket.length > 0 && (
        
        <Subtotal />
      )}
    </div>
  );
}

export default Checkout;
