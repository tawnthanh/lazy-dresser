import { useState } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./ProfilePage.css";
import hanger from "../../imgs/hanger-64.png"
import * as sessionActions from '../../store/session';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  if (!user) {
    return <Redirect to="/login"></Redirect>
  } else {
    return (
      <div className="content">
        <h2>hi, {user.username}!</h2>
        <h2>What would you like to do?</h2>
        <NavLink to="/items" className="view-content">
          <div className="view-content">
            <img className="fas" src={hanger} />
            <h2>View Inventory</h2>
          </div>
        </NavLink>
        <NavLink to="/outfits" className="view-content">
          <div >
            <i className="fas fa-tshirt fa-3x main"></i>
            <h2>View Outfits</h2>
          </div>
        </NavLink>
        <div className="view-content" onClick={logout}>
          <i className="fas fa-sign-out-alt fa-3x main"></i>
        </div>
      </div>
    )
  }
}

export default ProfilePage;
