import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";

function Login() {
    let navigate = useNavigate();
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  console.log(email, password);

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
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
              placeholder="Email address"
            />
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              class="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
              placeholder="Password"
            />
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          <div class="row mb-4">
            

            <div class="col">
              {/* <!-- Simple link --> */}
              <a href="#!" style={{color:"var(--primary)"}}>Forgot password?</a>
            </div>
          </div>

          {/* <!-- Submit button --> */}
          <button
            type="button"
            class="btn btn-primary btn-block mb-4"
            onClick={(e) => {
              // it prevent the the page from reload (default behaviour of button click is to reload page)
              e.preventDefault();
              auth.signInWithEmailAndPassword(email, password);
              navigate('/')
            }}
            style={{backgroundColor:"var(--primary)" , border:"none"}}

            
          >
            Log In
          </button>

          {/* <!-- Register buttons --> */}
          <div class="text-center">
            <p>
              Not a member? <a href="/signup" style={{color:"var(--primary)"}} >Register</a>
            </p>
            <p>or log In with:</p>
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-facebook-f" style={{color:"var(--primary)"}}></i>
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

export default Login;
