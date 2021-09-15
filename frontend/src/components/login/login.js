
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/useAction';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './login.css'
import { MDBSpinner } from 'mdb-react-ui-kit';


const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { loading, token} = useSelector(state=>state.useReducer)

    const dispatch = useDispatch()
    const handlSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser({ email, password }))

    }
    return (
        <div className='backgound'>

            <div className='col-md-3 m-auto '>
                <h1 className='d-flex justify-content-center border'>Log in</h1>

                {loading ? (  <MDBSpinner grow className='mx-2' color='secondary'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>): token ? <Redirect to="/homescreen" /> : (
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                       <Form.Group  className="d-flex justify-content-between">
                        <Button variant="primary" type="submit" onClick={handlSubmit}>
                        S'identifier
                        </Button>
                        or
                        <Link to='/signup'>
                        <Button variant="primary" type="submit" >
                           Sign up 
                        </Button></Link></Form.Group>
                    </Form>)
                    }

            </div>
        </div>
    )
}

export default LogIn