import "./CardItem.css";
import { Link,Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  const {token,loading } = useSelector(state => state.useReducer)
  return (
    <div className="cartitem">
      {loading ? <h1>loading</h1> : !token ? <Redirect to='/'/> :(
        <>
      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="cartItem__name">
        <p>{item.name}</p>
      </Link>
      <p className="cartitem__price">${item.price}</p>
      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cartItem__select"
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
      </>
    )}
    </div>
  );
};

export default CartItem;