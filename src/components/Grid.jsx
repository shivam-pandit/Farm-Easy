import { useSelector } from "react-redux";
import Product from "./product";
import "../components/css/Grid.css"
import Slider from "../components/Slider"

let Grid = (props) => {
  let state = useSelector((state) => state);

  
  return (
    <>
      <div className="gridBase">
        <div className="gridTitleHolder">
          {props.title && <p className="title">{props.title}</p>}
        </div>
        
        {props.bestSeller && 
        <section class="products" >          
            {/* {state.map((el, index) => (
              <Product key={index} data={el} className="bestSellerProducts"  />
            ))} */}

              <Slider
                items={state}
                isBestSeller={true}
                noOfSlides={2}
              />
        </section>
        }
      </div>
    </>
  );
};

export default Grid;
