import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import hanger from "../../imgs/hanger-64.png"
import newItem from "../../imgs/add-item.png";
import newOutfit from "../../imgs/add-outfit.png";

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
      <div onClick={openMenu} className="side-title">
          <i className="fas fa-bars fa-2x"></i>
      </div>
      {showMenu && (
        <>
        <div className="sidebar">
          <div className="view-items">
              <NavLink to="/items"><img className="fas" src={hanger} alt={hanger}/></NavLink>
          </div>
          <div className="create-item">
            <NavLink to="/item/create">
                <img className="add-clothes" src={newItem} alt={newItem}/>
            </NavLink>
          </div>
          <div className="view-outfits">
            <NavLink to="/outfits"><i className="fas fa-tshirt fa-3x"></i></NavLink>
          </div>
          <div className="create-outfit">
            <NavLink to="/outfit/create">
              <img className="add-outfit" src={newOutfit} alt={newOutfit}/>
            </NavLink>
          </div>
          <div className="profile">
            <NavLink to="/"><i className="fas fa-user-circle fa-3x" /></NavLink>
          </div>
          <div className="static-logo">LaZy DResSeR</div>
          <div className="credits">
              {/* <NavLink to="/credit">by Thanh Nguyen</NavLink> */}
              <a href="https://github.com/tawnthanh"><i className="fab fa-github fa-2x"></i></a>
              <a href="https://www.linkedin.com/in/thanh-nguyen-15a50437/"><i className="fab fa-linkedin-in fa-2x"></i></a>
          </div>
        </div>
      </>
      )}
    </div>
  );
}

export default ProfileButton;
