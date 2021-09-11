import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/useAction';
import  './SideDrawer.css'

const SideDrawer = ({show,click}) => {
  
    const sidedrawerclass =['sidedrawer']
    if(show){
        sidedrawerclass.push('show');
    }
    const dispatch = useDispatch()
    return (
        <div className={sidedrawerclass.join(' ')}>
             <ul className="sidedrawer__links" onClick={click}>
             <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Panier{" "}
              <span className="sidedrawer__cartbadge">0</span>
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
        </div>
    )
}

export default SideDrawer
