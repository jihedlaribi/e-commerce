import React, { useState } from 'react'
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { editUser, getUser } from '../../redux/actions/crudAction';

const EditUser = ({user}) => {
    const [fullName, setFullName] = useState(user.fullName);
    const [email, setEmail] =useState(user.email);
    const [age, setAge] = useState(user.phone);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button  variant="dark"onClick={handleShow}>
         Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              placeholder='full Name'
            />
            <input
              type="text"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder='enter email'
            />
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              placeholder='enter age'
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
       
            variant="primary"
            type="submit"
            onClick={() => {
              dispatch(editUser(user._id, fullName,email, age ));
              dispatch(getUser());
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 
        </div>
    )
}

export default EditUser
