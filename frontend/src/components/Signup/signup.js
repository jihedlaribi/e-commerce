import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { registerUser } from '../../redux/actions/useAction';
import { Redirect } from 'react-router-dom';
import './signup.css'

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const { loading, users } = useSelector(state => state.useReducer)
  const dispatch = useDispatch('');


  const handlSubmit =(e) => {
    e.preventDefault()
    dispatch(registerUser({fullName,email,password,age}))
    
  }
    return ( 
    <div className='backgound'>
        <div className='col-md-4 m-auto'>
        
            <h1 className='d-flex justify-content-center border'> Register </h1>
            {loading ? <h1>loading ...</h1> : users ? (<Redirect to="/" />) :(
        
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>fullName</Form.Label>
    <Form.Control type="text" onChange={(e)=> setFullName(e.target.value)} value={fullName} placeholder="Enter fullName" />
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" onChange={(e)=> setPassword(e.target.value)} value={password}placeholder="Password" />
    <Form.Label>Age</Form.Label>
    <Form.Control type="Number" onChange={(e)=> setAge(e.target.value)} value={age}  placeholder="entre age" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className='d-flex justify-content-center ' variant="primary" type="submit" onClick={handlSubmit}>
    Submit
  </Button>
</Form>
            )}
        </div>
        </div>
    )
}

export default SignUp
