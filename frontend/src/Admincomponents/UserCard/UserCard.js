import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser, getUser } from "../../redux/actions/crudAction";

import EditUser from "../EditUser/EditUser";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteUser(user._id));
    dispatch(getUser());
  };
  return (
    
    <div className="card" >
      <Card style={{ width: "20rem", marginTop: "20px" }} >
        <Card.Body>
          <Card.Title>Full Name:{user.fullName}</Card.Title>
        
            <p>Email:{user.email}</p>
            <p>Age:{user.age}</p>
         
          <Card.Text className='d-flex justify-content-around'>
          <Button  variant="dark" onClick={handleDelete}>
            Delete
          </Button>
          <EditUser user={user} />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
