import React, { useState } from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DatePicker from "react-datepicker";

const Checkout = ( {item, qtyChangeHandler,getCartCount}) => {
    console.log(item)
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div style={{ width: '300px' }}>
             <Card style={{ width: '300px' }}>
  
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    Chose your date : <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    <Link to="/homescreen">   <Button variant="primary"> Go Back</Button></Link>
  </Card.Body>
</Card>
      
          
       
     
           

            </div>
    
    )
}

export default Checkout
