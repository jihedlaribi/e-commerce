
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/useAction';
import  './SideDrawer.css'

const SideDrawer = ({show,click}) => {
  const cart =useSelector(state => state.cart)
  const {cartItems} =cart;
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  
    const sidedrawerclass =['sidedrawer']
    if(show){
        sidedrawerclass.push('show');
    }
    const dispatch = useDispatch()
    
  const { token } = useSelector(state => state.useReducer)
    return (
        <div className={sidedrawerclass.join(' ')}>
             <ul className="sidedrawer__links" onClick={click}>
             <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Panier{" "}
              <span className="sidedrawer__cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/homescreen">Shop</Link>
        </li>
      
        <li>     <Link to="/contact">
   Contact
</Link> </li>
{token.user.role !== 1 ? <li> </li> : <li>
          <Link to="/Admin" >Admin</Link>
        </li>}
          <li onClick={() => dispatch(logout())}>

          <Link to="/">
               Logout
            </Link></li>
            <li style={{display:"flex",flexDirection:"row"}}><i class="fas fa-user"></i> <span>  {token.user.fullName} </span> </li>
</ul>
        </div>
    )
}

export default SideDrawer
