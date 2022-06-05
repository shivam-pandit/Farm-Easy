import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";

function SignUp() {
  let navigate = useNavigate();
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [email, setEmail] = useState("");

  return (
    <div
      className="loginWrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "30%",
          //   border: "1px solid red",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <form>
          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">
            <input
              type="email"
              id="form2Example1"
              class="form-control"
              placeholder="Email address"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              class="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
          </div>

          {/* confirm Password */}
          <div class="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              class="form-control"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.currentTarget.value);
              }}
            />
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          <div class="row mb-4"></div>

          {/* <!-- Submit button --> */}
          <button
            type="button"
            class="btn btn-primary btn-block mb-4"
            onClick={(e) => {
              e.preventDefault();
              if (password === confirmPassword) {
                auth.createUserWithEmailAndPassword(email, password);
              } else {
                alert("Password doesn't matched");
              }
              navigate('/login')
            }}
            style={{backgroundColor:"var(--primary)" , border:"none"}}
          >
            Sign Up
          </button>

          {/* <!-- Register buttons --> */}
          <div class="text-center">
            <p>
              Already a member? <a href="/login" style={{color:"var(--primary)"}}>LogIn</a>
            </p>
            <p>or sign up with:</p>
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-facebook-f " style={{color:"var(--primary)"}}></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-google" style={{color:"var(--primary)"}}></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-twitter" style={{color:"var(--primary)"}}></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
