import React, { useEffect, useState } from "react";
import "../components/css/Slider.css";
import Product from "./product";

const Slider = (props) => {
  let [y, setY] = useState(0);
  let [x, setX] = useState(0);

  console.log(y);
  let goPrevX = () => {
    x === 0
      ? setX(-100 * (props.items.length - props.noOfSlides))
      : setX(x + 100);
  };

  let goNextX = () => {
    x === -100 * (props.items.length - props.noOfSlides)
      ? setX(0)
      : setX(x - 100);
  };

  let goPrev = () => {
    y === 0
      ? setY(-100 * (props.items.length - props.noOfSlides))
      : setY(y + 100);
  };
  let goNext = () => {
    y === -100 * (props.items.length - props.noOfSlides)
      ? setY(0)
      : setY(y - 100);
  };

  useEffect(() => {
    let intervel = setInterval(() => {
      goNext();
    }, 5000);

    return () => {
      clearInterval(intervel);
    };
  }, [y]);
  return (
    <>
      <div className="CrousalWrapper">
        {props.isHeroSection && (
          <>
            <div className="slideWrapper">
              <div className="btnWrapper" onClick={goPrev}>
                <i class="fa-solid fa-circle-arrow-left prev"></i>
              </div>

              <div className="innerSlideWrapper">
                {props.items.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="slide"
                      style={{ transform: `translateX(${y}%)` }}
                    >
                      <img src={item.imgUrl} alt="" className="heroImg" />
                    </div>
                  );
                })}
              </div>
              <div className="btnWrapper" onClick={goNext}>
                <i class="fa-solid fa-circle-arrow-right next"></i>
              </div>
            </div>
          </>
        )}

        {props.isBestSeller && (
          <>
            <div className="slideWrapper">
              <div className="btnWrapper" onClick={goPrevX}>
                <i class="fa-solid fa-circle-arrow-left prev"></i>
              </div>

              <div className="productInnerContainer">
                {props.items.map((item, index) => {
                  return (
                    <div
                      className="itemSlider"
                      key={index}
                      style={{ transform: `translateX(${x}%)` }}
                    >
                      <Product className="productContainer" id={item.id} />
                    </div>
                  );
                })}
              </div>

              <div className="btnWrapper" onClick={goNextX}>
                <i class="fa-solid fa-circle-arrow-right next"></i>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Slider;
