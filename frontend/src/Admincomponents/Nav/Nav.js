import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Nav = () => {
  const { token} = useSelector(state=>state.useReducer)
    return (
        <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Admin Dashbord</MDBNavbarBrand>
       <Link   to='/homescreen'>   <MDBNavbarBrand href='#'>Back to shop</MDBNavbarBrand> </Link>
          <MDBNavbarBrand href='#'>Admin :{token.user.fullName}</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>


      </>
    )
}

export default Nav
