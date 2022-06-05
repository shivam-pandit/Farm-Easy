import { useDispatch, useSelector } from "react-redux";
import "./css/product.css";
import { addCreator, addToWishlistCreator } from "../redux/action";
import { useNavigate } from "react-router";

let Product = (props) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let state = useSelector((state) => state);
  console.log("props==",props);

  return (
    <>
      {/* // inside product section. */}

      <div class="product-card container"  style={{backgroundColor:"white"}}>
        {/* <div class="product-image">
            <span class="discount-tag">50% off</span>
            <img
              onClick={() => {
                navigate(`/preview/${props.data.id}`);
              }}
              src={props.data.img}
              class="product-thumb"
              alt=""
            />
            <button
              onClick={() => {
                dispatch(addToWishlistCreator(props.data.id));
              }}
              class="card-btn"
            >
              wishlist
            </button>
          </div>
          <div class="product-info">
            <h2 class="product-brand">{props.data.name}</h2>
            
            <span class="price">Rs. {props.data.price}</span>
            <span class="actual-price">Rs. {props.data.actual_price}</span>
          </div> */}

        <div className="imgContainer">
          <img
            src="item1.jpg"
            alt=""
            onClick={() => {
              navigate(`/preview/${props.id}`);
            }}
          />
          <p className="discountTag">20% OFF</p>
        </div>
        <div className="textContainer">
          <div className="cardTitle">
            <p>Power Plus Combo</p>
          </div>
          <div className="priceContainer">
            <div className="discountedPrice">
              <span>₹</span>699
            </div>
            <div className="actualPrice">
              <span>₹</span>
              <del>756</del>
            </div>
          </div>
          <div className="addToCartContainer">
            <button onClick={() => {
                dispatch(addCreator(props.id));
              }}>Add to cart</button>
          </div>
        </div>
      </div>
      {/* +7 more cards */}
    </>
  );
};

export default Product;
