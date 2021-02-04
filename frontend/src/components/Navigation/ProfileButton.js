import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import * as sessionActions from '../../store/session';
import hanger from "../../imgs/hanger-64.png"

function ProfileButton({ user }) {
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

  return (
    <div className="full-sidebar">
      <div onClick={openMenu}>
        <div className="side-title">LaZy DResSeR</div>
      </div>
      {showMenu && (
        <>
        <div className="sidebar">
          <div className="view-items">
              <NavLink to="/items"><img className="fas" src={hanger} alt={hanger}/></NavLink>
          </div>
          <div className="create-item">
            <NavLink to="/item/create">
                <img className="add-clothes" src={hanger} alt={hanger}/>
                <i className="add-clothes-plus fas fa-plus fa-2x"></i>
            </NavLink>
          </div>
          <div className="view-outfits">
            <NavLink to="/outfits"><i className="fas fa-tshirt fa-3x"></i></NavLink>
          </div>
          <div className="create-outfit">
            <NavLink to="/outfit/create">
                <i className="add-outfit fas fa-tshirt fa-3x"></i>
                <i className="add-item-plus fas fa-plus fa-2x"></i>
            </NavLink>
            </div>
            <div className="profile">
            {/* <ProfileButton user={sessionUser} /> */}

            <NavLink to="/"><i className="fas fa-user-circle fa-3x" /></NavLink>
            </div>
        </div>
      </>
      )}
    </div>
  );
}

export default ProfileButton;
