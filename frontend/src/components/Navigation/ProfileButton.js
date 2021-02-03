import React, { useState, useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import hanger from "../../imgs/hanger-64.png"

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(true);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const redirect = () => {
    history.push("/")
  }
  return (
    <div className="full-sidebar">
      <div onClick={openMenu}>
        <div className="side-title">LaZy DResSeR</div>
      </div>
      {showMenu && (
        <>
        <div className="sidebar">
          <div className="first-nav">
            <NavLink to="/items"><img className="fas" src={hanger}/></NavLink>
          </div>
          <div className="create-outfit">
            <NavLink to="/item/create">
              <img className="add-clothes" src={hanger}/>
                <i className="add-clothes-plus fas fa-plus fa-2x"></i>
            </NavLink>
          </div>
          <div>
            <NavLink to="/outfits"><i className="fas fa-tshirt fa-3x"></i></NavLink>
          </div>
          <div className="create-item">
            <NavLink to="/outfit/create">
                <i className="add-outfit fas fa-tshirt fa-3x"></i>
                <i className="add-item-plus fas fa-plus fa-2x"></i>
            </NavLink>
            </div>
            <div>
            {/* <ProfileButton user={sessionUser} /> */}

            <NavLink to="/"><i className="fas fa-user-circle fa-3x" /></NavLink>
            </div>
            <button onClick={logout}>Log Out</button>
        </div>
      </>
        // <ul className="profile-dropdown">
        //   <li>{user.username}</li>
        //   <li>{user.email}</li>
        //   <li>
        //     <button onClick={logout}>Log Out</button>
        //   </li>
        // </ul>
      )}
    </div>
  );
}

export default ProfileButton;
