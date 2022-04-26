import { authService } from 'fbase';
import { useNavigate } from "react-router-dom";
import React from 'react'

function Profile() {
  // const OnLogOutClick = () => authService.signOut();
    const navigate = useNavigate();
    const onLogOutClick = () => {
      authService.signOut();
      navigate("/");
    };
  return (
    <>
      <button onClick={onLogOutClick}>LogOut</button>
    </>
  )
}

export default Profile;