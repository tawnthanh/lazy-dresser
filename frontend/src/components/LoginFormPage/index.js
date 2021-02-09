import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import './LoginForm.css';
import openCloset from "../../imgs/open-closet.png";

function LoginFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
    .then(res => history.push("/"))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(["Sorry, invalid credentials.\nTry again"]);
      });
  };

  const logDemo = () => {
    dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }))
      .then(res => history.push("/"))
      .catch(
        (res) => {
          if (res.data && res.data.errors) setErrors(["Sorry, invalid credentials.\nTry again"]);
        })
      }

  let title = "LAzY\nDrEsSeR";
  
  if (sessionUser) return <Redirect to="/" />;
  return (
    <div className="content signup-login">
      <div className="login-container">
        <img src={openCloset} alt="open-closet"/>
      </div>
      <h1 className="main-title">
       {title}
      </h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-errors">
          <p key={"error-1"}>{errors[0]}</p>
        </div>
        <label className="validation-input">
          <input
            type="text"
            value={credential}
            placeholder="username or email"
            onChange={(e) => setCredential(e.target.value)}
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
        <button className="login-button" type="submit">Enter</button>
        <button className="login-button" onClick={logDemo}>Demo</button>
      </form>
      <div className="signup-redirect">
        {"Don't have a closet? "}
        <NavLink to="/signup">Signup</NavLink>
      </div>
  </div>
  );
}

export default LoginFormPage;
