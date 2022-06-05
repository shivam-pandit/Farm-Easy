import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./css/cart.css";
import { decreaseItem, increaseItem, removeCreator } from "../redux/action";

let Cart = () => {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let filteredArr = state.filter((el) => el.qty > 0);
  let total = 0;
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Qty</th>
            <th scope="col"></th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredArr.map((el, index) => {
            let amount = el.qty * el.price;
            total += amount;

            return (
              <>
                <tr>
                  <th scope="col">{index + 1}</th>
                  <th scope="col">{el.name}</th>
                  <th scope="col">{el.price}</th>
                  <span>
                    <button
                      onClick={() => {
                        dispatch(decreaseItem(el.id));
                      }}
                      className="inc-dec-btn"
                    >
                      -
                    </button>
                    <th scope="col">{el.qty}</th>
                    <button
                      onClick={() => {
                        dispatch(increaseItem(el.id));
                      }}
                      className="inc-dec-btn"
                    >
                      +
                    </button>
                  </span>
                  <img className="cart-img" src={el.img} alt="" />
                  <th scope="col">{amount}</th>
                  <button
                    onClick={() => {
                      dispatch(removeCreator(el.id));
                    }}
                    className="remove"
                  >
                    Remove
                  </button>
                </tr>
              </>
            );
          })}

          <tr></tr>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">total</th>
            <th scope="col">Rs. {total}</th>
            <button>Place Order</button>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Cart;
