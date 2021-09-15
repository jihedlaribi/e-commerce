import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getUser } from '../../redux/actions/crudAction'
import AddUser from '../AddUser/AddUser'
import Nav from '../Nav/Nav'
import UserList from '../UserList/UserList'
const AdminScreen = () => {
    const { token, loading } = useSelector(state => state.useReducer)

    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getUser())
    // }, []);
    return (
        <div >
            {loading ? <h1>loading ... </h1> : ( token === null|| token.user.role !== 1 )? <Redirect to='/' /> : (<>  <Nav />
            <AddUser/>    <UserList />
            </>)}

        </div>
    )
}

export default AdminScreen
