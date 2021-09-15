
import './ProductsScreen.css'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
//actions
import { getProductDetails as details } from '../../redux/actions/productAction'
import { addToCart } from '../../redux/actions/cartAction'
import { ProgressBar } from 'react-bootstrap'
import { MDBSpinner } from 'mdb-react-ui-kit';
import Navbar from '../../components/Navbar/Navbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import Backdrop from '../../components/backdrop/Backdrop'
const ProductsScreen = ({match, history}) => {
const [qty, setQty] = useState(1);
const dispatch = useDispatch();
const getProductDetails = useSelector((state)=>state.getProductDetails);
const {loading,error,product}=getProductDetails;
useEffect(() => {
   if(product && match.params.id !== product._id){
       dispatch(details(match.params.id))
   }
    }
, [dispatch,product,match])
 const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };
  const [sideToggle, setsideToggle] = useState(false)
    return (
      <div>
      {loading ? (
        <MDBSpinner grow className='mx-2' color='secondary'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
                 <Navbar click={()=>setsideToggle(true)}/>
       <SideDrawer show={sideToggle} click={()=>setsideToggle(false)}/>
       <Backdrop show={sideToggle} click={()=>setsideToggle(false)}/>
        <div className="productscreen">
       
        
          <div className="productscreen__left">
            <div className="left__image">
              
              <img style={{width:"50%"}} src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>Price:${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
              <ProgressBar animated now={45} />
            </div>
              </div> 
       
         </div></>
      )}
    </div>
   
  );
};

export default ProductsScreen
