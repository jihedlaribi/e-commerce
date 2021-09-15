import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUser, getUser } from "../../redux/actions/crudAction";
import "./AddUser.css"

const AddUser = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <div>
      <Button variant="dark" className="add" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add user</Modal.Title>
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
          <Button variant="secondary"  type="submit" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(addUser(fullName,email, age ));
              dispatch(getUser());
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddUser;
