import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { moveToWishlist } from "../redux/action";
import "./css/wishlist.css";

let Wishlist = () => {
  let state = useSelector((state) => state);
  console.log(state);
  let wishlisteddArr = state.filter((el) => el.wishlisted > 0);
  console.log(wishlisteddArr);
  let dispatch = useDispatch();

  return (
    <>
      <h2>My Wistlist {wishlisteddArr.length} items</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">img</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {wishlisteddArr.map((el, index) => {
            return (
              <>
                <tr>
                  <th scope="col">{index + 1}</th>
                  <th scope="col">{el.name}</th>
                  <th scope="col">{el.price}</th>
                  <img className="wishlisted-img" src={el.img} alt="" />
                  <button
                    onClick={() => {
                      dispatch(moveToWishlist(el.id));
                      // el.wishlisted = false
                      // console.log(el.wishlisted);
                    }}
                    className="move-to-cart"
                  >
                    Move to cart
                  </button>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Wishlist;
