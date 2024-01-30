import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Auth.css";

import ProfileEditForm from "./ProfileEditForm";
import Navigation from './Navigation';
import { useAuth } from "./AuthContext";


function ProfileEdit() {

  const { isLoggedIn, handleLogout } = useAuth();

  return (
    <div>
      <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Link to="/profile">
        <button className="Prof2-Backbutton">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
          </svg>
        </button>
      </Link>
      <div className="Prof2-content">
        <div className="Prof2-sign">
          <ProfileEditForm/>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;