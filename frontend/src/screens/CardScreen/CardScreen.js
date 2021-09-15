import "./CardScreen.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";
// Components
import CartItem from "../../components/Carditem/CardItem";
import Navbar from '../../components/Navbar/Navbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import Backdrop from '../../components/backdrop/Backdrop'

// Actions
import { addToCart, removeFromCart } from "../../redux/actions/cartAction";


const CartScreen = () => {
  const [sideToggle, setsideToggle] = useState(false)
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.useReducer)
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => { }, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);

  };


  return (
    <>
      <Navbar click={() => setsideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setsideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setsideToggle(false)} />
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
          {console.log(cartItems)}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
            <Link to='/checkout'>

              <button onClick={() => alert(`order sucsses ${token.user.fullName}`)}>Proceed To Checkout</button>
            </Link>
          
          </div>
          <ProgressBar animated now={80} />
        </div>
      </div>
    </>
  );
};

export default CartScreen;