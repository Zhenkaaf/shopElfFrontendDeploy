import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearYourOrderDB } from "../../store/cartSlice";

const OrderFromDB = () => {
  const yourOrderFromDB = useSelector((state) => state.cart.yourOrderDB);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleToHome = () => {
    dispatch(clearYourOrderDB());
    navigate("/");
  };

  return (
    <div>
      <h2>Your order has been successfully processed!</h2>
      <h3>Order Details</h3>
      <p>Name: {yourOrderFromDB.name}</p>
      <p>Email: {yourOrderFromDB.email}</p>
      <p>Phone: {yourOrderFromDB.phone}</p>
      <p>Address: {yourOrderFromDB.address}</p>
      <p>Total Price: {yourOrderFromDB.totalPrice} $</p>
      <p>Products:</p>
      {yourOrderFromDB.products.map((product) => (
        <p key={product.name}>
          {product.name} - Quantity: {product.quantity} pcs.
        </p>
      ))}
      <p>Time: {new Date(yourOrderFromDB.createdAt).toLocaleString()}</p>
      <p>№: {yourOrderFromDB._id}</p>
      <button onClick={handleToHome}>To Home Page</button>
    </div>
  );
};
export default OrderFromDB;
