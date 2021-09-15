import { ADD, DELETE, EDIT, GET } from "../actionTypes/crudType";

const initialState ={
user:[],
loading:true
 }
  const crud=(state=initialState ,{type,payload})=>{
      switch (type) {
          case GET:
              return {...state,loading:false,user:payload}
              case ADD : 
              return {...state,loading:false,user:[...state.user,payload]}
              case DELETE:
                  return {...state,loading:false,user:state.user.filter(elt=> elt._id !== payload._id)}
             case EDIT:
                 return {...state,loading:false,user:state.user.map(elt => elt._id===payload._id?payload:elt)}
          default:
              return state;
              
      }
  }
  export default crud