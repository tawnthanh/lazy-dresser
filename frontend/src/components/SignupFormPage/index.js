import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import closet from "../../imgs/closed-closet.png"

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
    return setErrors(['Confirmed password must match password.']);
  };

  let title = "LAzY\ndREsSeR"

  return (
    <div className="content signup-login">
      <h1 className="main-title">
       {title}
      </h1>
      <div className="closet-container">
        <img src={closet} alt="polka-dots"/>
      </div>
        <form className="signup-form" onSubmit={handleSubmit}>

          <label className="validation-input">
            <input
              type="text"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              // required
            />
          </label>
          <label className="validation-input">
            <input
              type="text"
              value={username}
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              // required
            />
          </label>
          <label className="validation-input">
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              // required
            />
          </label>
          <label className="validation-input">
            <input
              type="password"
              value={confirmPassword}
              placeholder="confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              // required
            />
          </label>
          <button className="login-button" type="submit">Open Closet</button>
          <div className="signup-errors">
          {errors.map((error, idx) =>{
            if (idx % 2) return <li key={idx}>{error}</li>;
            else return error;
          })}
          </div>
        </form>
        <div className="login-redirect">
            {"Oops, already have a closet? "}
            <NavLink to="/login">Login</NavLink>
        </div>
      </div>
  );
}

export default SignupFormPage;
