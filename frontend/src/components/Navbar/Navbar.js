import React from 'react'
import '../Navbar/Navbar.css'
import {Link}  from 'react-router-dom'
import {
  useDispatch,
  useSelector,
} from "react-redux";

import { logout } from '../../redux/actions/useAction';
const Navbar = ({click}) => {

  const cart =useSelector(state => state.cart)
  const {cartItems} =cart;
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
 
  const dispatch = useDispatch()

    return (
      
        <nav className="navbar">
        <div className="navbar__logo">
        <Link to='/homescreen' className='link__store'> 
          <h2> <i class="fas fa-cash-register fa-2x"></i> Store </h2></Link>
        </div>
  
        <ul className="navbar__links">
          <li>
            <Link to="/cart" className="cart__link">
              <i className="fas fa-shopping-cart"></i>
              <span>
                Panier <span className="cartlogo__badge">{getCartCount()}</span>
              </span>
            </Link>
          </li>
         
            
               <li>
            <Link to="/homescreen">Shop</Link>
          </li>
        
        
          <li onClick={() => dispatch(logout())}> 
          <Link to="/">
             
                Logout
                <i className="fas fa-sign-out-alt"></i> 
             
            </Link></li>
        </ul>
  
        <div className="hamburger__menu"  onClick={click}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
       
    );
};

export default Navbar

