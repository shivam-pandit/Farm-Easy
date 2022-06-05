import Header from "./components/header.jsx";
import "./App.css";
import Footer from "./components/footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Preview from "./components/preview.jsx";
import Cart from "./components/cart.jsx";
import Wishlist from "./components/wishlist.jsx";
import ScrollToTop from "./ScrollToTop";
import Home from "./components/Home.jsx";
import CropRec from "./components/CropRec.jsx";
import ItemGrid from "./components/ItemGrid.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Profile from "./components/Profile.jsx";
import AuthProvider from "./AuthProvider.js";
import firebase from "./Firebase";

let App = () => {
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user.email);
    console.log(user.uid);
  });

  return (
    <>
      <Router>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/preview/:id" element={<Preview />} />
            <Route
              path="/"
              element={
                <React.Fragment>
                  <Home />
                </React.Fragment>
              }
            />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/crop-recommendation" element={<CropRec />} />
            <Route path="/item-list" element={<ItemGrid />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/user-profile" element={<Profile />} />
          </Routes>

          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
};

export default App;
