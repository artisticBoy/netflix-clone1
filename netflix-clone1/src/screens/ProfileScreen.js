import React from "react";
import "./ProfileScreen.css";
import NavBar from "../NavBar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const ProfileScreen = () => {
  const history = useHistory();
  const user = useSelector(selectUser);
  const signOut = () => {
    auth.signOut();
    history.push("/login");
  };
  return (
    <div className="profileScreen">
      <NavBar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button onClick={signOut}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
