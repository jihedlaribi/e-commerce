import React from 'react'
import { useSelector } from 'react-redux';
import Checkout from "../CheckOut/checkout"
const CheckoutList = () => {
    const cart = useSelector((state) => state.cart);
    const { checkoutlist } = cart;
    return (
        <div>
              { checkoutlist.map((item) => (
              
              
              <Checkout key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler} getCartCount={getCartCount} />))}
        </div>
    )
}

export default CheckoutList
