import { useEffect, useState } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProfilePage.css";
import hanger from "../../imgs/hanger-64.png"

const ProfilePage = () => {
  const user = useSelector(state => state.session.user)
  const [authenticate, setAuthenticate] = useState(false)



  if (!user) {
    return <Redirect to="/login"></Redirect>
  } else {
    return (
      <div className="content">
        <a href="/edit-profile" className="edit-profile-button">
          <i className="fas fa-cog fa-2x"></i>
        </a>
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
      </div>
    )
  }
}

export default ProfilePage;
