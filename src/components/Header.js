import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utlis/firbase";
import { useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate();

    const signOutHandler = () => {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          navigate("/");
        })
        .catch((error) => {
          // An error happened.
        });
    };
  
  return (
    <div className="flex  justify-content-end p-2">
      <div className="absolute top-[10px] left-[150px] z-10">
        <img
          className="h-[80px]"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
      </div>
      <button onClick={signOutHandler}>Sign Out</button>
    </div>
  );
};

export default Header;
