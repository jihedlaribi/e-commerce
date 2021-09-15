import React, { useEffect, useState } from 'react'
import { Form, FormControl,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/actions/crudAction'
import UserCard from '../UserCard/UserCard'
import "./UserList.css"

const UserList = () => {
    const {user,loading} = useSelector(state => state.crud)
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getUser())
    }, []);
    const [search, setSearch] = useState("");
    return (
   <div className="list">   { (loading) ? (<h1>loading ...</h1>):( <div>
        <Form className="d-flex   col-md-4  mr-auto" style={{margin:"auto"}}>
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
    <div  id="flex" style={{display:"flex", flexWrap:'wrap',justifyContent:"space-between" }}>

    {user.filter(
        (el) =>
        el.fullName.toUpperCase().includes(search.toUpperCase())).map(user => <UserCard user={user} key={user._id} />)}
        </div>
</div>)}</div>
    )
}

export default UserList
