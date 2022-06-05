import "./css/hero.css";
import Product from "./product";
import light_logo from "../img/light-logo.png";
import { useSelector } from "react-redux";
import Slider from "./Slider";
let Herosection = () => {
  let state = useSelector((state) => state);
  console.log(state);

  return (
    
    <>
      {/* <!-- hero section --> */}
      <header class="hero-section">
        <div class="content">
              <Slider
               isHeroSection = {true}
               items={[
                { imgUrl: "banner-1.png" },
                { imgUrl: "banner-2.png" },
                { imgUrl: "banner-3.png" },
                
                
                
              ]}

              noOfSlides={1}
               />
        </div>
        {/* <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://images.unsplash.com/photo-1507662228758-08d030c4820b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://images.unsplash.com/photo-1507662228758-08d030c4820b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://images.unsplash.com/photo-1507662228758-08d030c4820b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div> */}
      </header>
    </>
  );
};

export default Herosection;
