import "./css/header.css";
// import dark_logo from "../img/dark-logo.png";
import userImg from "../img/user.png";
import cartImg from "../img/cart.png";
import { useNavigate } from "react-router";
import wishlist from "../img/wishlist.png";

let Header = () => {
  let navigate = useNavigate();
  return (
    <>
      <p className="nav">
        <nav class="navbar">
          <div class="nav">
            <div className="logoContainer">
              <div
                className="brand-logo"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                Farm-Easy
              </div>
            </div>

            <div class="nav-items">
              <div class="search">
                <input
                  type="text"
                  class="search-box"
                  placeholder="search brand, product"
                />
                <button class="search-btn">search</button>
              </div>
              <img
                className="img"
                src={userImg}
                alt=""
                onClick={() => {
                  navigate("/login");
                }}
              />
              <img
                onClick={() => {
                  navigate("/cart");
                }}
                className="img"
                src={cartImg}
                alt=""
              />
              <img
                onClick={() => {
                  navigate("/wishlist");
                }}
                className="wishlist"
                src={wishlist}
                alt=""
              />
            </div>
          </div>
          <ul class="links-container">
            <li class="link-item">
              <a href="/" class="link">
                home
              </a>
            </li>
            <li class="link-item">
              <a href="/item-list" class="link">
                seeds
              </a>
            </li>
            <li class="link-item">
              <a href="/item-list" class="link">
                Gardening
              </a>
            </li>
            <li class="link-item">
              <a href="/item-list" class="link">
                pesticides
              </a>
            </li>
            <li class="link-item">
              <a href="/item-list" class="link">
                Agri-Implements
              </a>
            </li>
            <li class="link-item">
              <a href="/item-list" class="link">
                Fertilizers
              </a>
            </li>
            <li class="link-item">
              <a href="http://localhost:5000/crop-recommendation" class="link">
                Crop-Recommendation
              </a>
            </li>
          </ul>
        </nav>
      </p>
    </>
  );
};

export default Header;
