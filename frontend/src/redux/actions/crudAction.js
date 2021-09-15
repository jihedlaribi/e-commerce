
import { ADD, DELETE, EDIT, GET } from "../actionTypes/crudType";


import axios from "axios";



export const addUser = (fullName, email, age) => async (dispatch) => {
  try {
    const newUser = { fullName, email, age };
    let res = await axios.post('/user/add', newUser);
    dispatch({
      type: ADD,
      payload: res.data,
    });

  } catch (error) {
    alert("post error");
  }
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`/user/delete/${id}`);
    dispatch({
      type:DELETE,
      payload: res.data,
    });
  } catch (error) {
    alert("delete error");
  }
};
export const getUser = () => async (dispatch) => {
  try {
    let res = await axios.get("/user/get");
    dispatch({
      type: GET,
      payload: res.data,
    });
  } catch (error) {
    alert("get error");
  }
};
export const editUser =(id, fullName, email,age) => async (dispatch) => {
  try {
      let editedUser= {fullName, email,age}
      let res = await axios.put(`/user/update/${id}`, editedUser)
      dispatch({
          type : EDIT ,
          payload : res.data   
      })
  } catch (error) {
      alert('put error')
  }
}
