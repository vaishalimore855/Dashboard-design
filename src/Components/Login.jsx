import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="login">
        <div className="login-container">
          <div className="login-box">
            <h2>Sign in to Salesai</h2>
            <form>
              <input type="text" id="email" name="email" placeholder="Email" />
              <div className="password-container ">
              <input
              style={{width:"80%"}}
                className="password-container"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
              />
              <i
                className={` fas eye-icon ${
                  showPassword  ? " fas fa-eye":" fas fa-eye-slash"
                }`}
                onClick={togglePasswordVisibility}
              ></i>

              </div>
              
              <div className="checkbox-container">
                <label htmlFor="remember">Remember me</label>

                <a href="#" className="forget-password">
                  Forget Password?
                </a>
              </div>

              <button type="submit">Sign In</button>
            </form>

            <div className="or-login-with">Or login with</div>

            <div className="social-buttons">
              <div className="icon-container">
                <i className="icon fab fa-google"></i>
                <a href="/google.com" className="label">
                  Google
                </a>
              </div>
              <div className="icon-container">
                <i className="icon fab fa-apple"></i>

                <a href="/apple.com" className="label">
                  Apple
                </a>
              </div>
            </div>

            <div className="sign-up-link">
              <span> Don't have an account? </span>
              <a href="/sign-up" className="sign-up">
                Sign Up now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
