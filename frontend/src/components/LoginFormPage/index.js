import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import './LoginForm.css';
import polkaDots from "../../imgs/purple-polka-dots.jpeg"

function LoginFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .then(res => history.push("/"))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  };

  const logDemo = () => {
    dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }))
      .then(res => history.push("/"))
      .catch(
        (res) => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        })
  }

  let title = "LAzY\ndREsSeR"
  return (
    <>
      <h1 className="login-signup-title">
       {title}
      </h1>
      <div className="login-container">
        <img src={polkaDots} alt="polka-dots"/>
      </div>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div>
            {errors.map((error, idx) => (
                <p key={idx}>{error}</p>
              ))}
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

          <div className="login-button">
            <button type="submit">Enter</button>
          </div>
          <div className="login-button">
            <button onClick={logDemo}>Demo</button>
          </div>
        </form>
        <div className="signup-redirect">
          {"Don't have a closet? "}
          <NavLink to="/signup">Signup</NavLink>
        </div>
      </div>
  </>
  );
}

export default LoginFormPage;
