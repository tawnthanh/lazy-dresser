import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProfilePage.css";

const ProfilePage = () => {
  const user = useSelector(state => state.session.user)
  const [authenticate, setAuthenticate] = useState(false)



  if (!user) {
    return <Redirect to="/login"></Redirect>
  } else {
    return (
      <div className="content">
        <h1>hi, {user.username}</h1>
      </div>
    )
  }
}

export default ProfilePage;
