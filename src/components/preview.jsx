import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addCreator, addToWishlistCreator } from "../redux/action";
import "./css/preview.css";

let Preview = () => {
  let { id } = useParams();
  let state = useSelector((state) => state);
  let reqObj = state[id];
  let dispatch = useDispatch();
  console.log(id);
  return (
    <>
      <div className="preview-container">
        <div className="preview-img-container">
          <img src={reqObj.img} alt="" />
        </div>

        <div className="preview-listing">
          <h2>{reqObj.name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            quasi rem velit perferendis earum voluptas rerum ratione, porro
            dolorum doloribus? Impedit ipsa assumenda repudiandae tempore
            voluptates praesentium error magnam explicabo recusandae quae,
            accusamus, sit laudantium est nihil voluptatem minima obcaecati
            deleniti aliquam sunt, sint consequuntur. Harum, dicta! Earum, cum
            error?
          </p>
          <div className="btns">
            <button
              onClick={() => {
                dispatch(addCreator(reqObj.id));
              }}
              className="addBtn"
            >
              Add to cart
            </button>
            <button
              onClick={() => {
                dispatch(addToWishlistCreator(reqObj.id));
              }}
              className="addBtn"
            >
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;