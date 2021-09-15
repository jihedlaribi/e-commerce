import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Products from '../../components/Products/Products'
import '../HomeScreen/HomeScreen.css'
import {Form,FormControl,Button} from 'react-bootstrap'
import { getProducts as listProducts } from "../../redux/actions/productAction"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/Navbar/Navbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import Backdrop from '../../components/backdrop/Backdrop'
import { MDBSpinner } from 'mdb-react-ui-kit';
import { Redirect } from 'react-router'
const HomeScreen = () => {

    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts)
    const { products, loading, error } = getProducts;
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    const [search, setSearch] = useState("");
    
    const {token} = useSelector(state=>state.useReducer)
    const [sideToggle, setsideToggle] = useState(false)
    return (
        <div>
        
                  
                   
            <Navbar click={()=>setsideToggle(true)}/>
       <SideDrawer show={sideToggle} click={()=>setsideToggle(false)}/>
       <Backdrop show={sideToggle} click={()=>setsideToggle(false)}/>
       {loading ? (   <MDBSpinner grow className='mx-2  d-flex justify-content-center' color='secondary'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>): !token  ? <Redirect to="/" /> : (
           <>
        <div className="homescreen">
       
            <h2 className="homescreen__title">Latest Products</h2>

            <div >

            <Form className="d-flex   col-md-4 " style={{margin:"auto"}}>
      <FormControl
         onChange={e=>{setSearch(e.target.value)}}
         value={search}
         type="text"
        
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
            <div className="homescreen__products">
                
                {loading ?    <MDBSpinner grow className='mx-2' color='secondary'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner> : error ? <h1>{error}</h1> : products .filter(
            (el) =>
              el.name.toUpperCase().includes(search.toUpperCase())).map((product) =>
                  
                  <Products
          
                    key={product._id} 
                    productId={product._id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    imageUrl={product.imageUrl}
                    
                    
                    
               />    )}
            </div>
            </div>
            
        </div>
        </> )}
        </div>
    )
}

export default HomeScreen
