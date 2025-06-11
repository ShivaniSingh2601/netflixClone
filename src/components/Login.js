import React, { useState, useEffect, useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../utlis/firbase"
import { useNavigate } from "react-router";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utlis/userSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage]= useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const userNameRef = useRef(null);


  const onClickHandler = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const emailValidate = (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email);
    const passwordValidate = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%^&*])(.{8,})$/).test(password);
    if(!emailValidate){
      setErrorMessage("Please enter a valid email");
      return 
    }
    else if(!passwordValidate){
      setErrorMessage("Invalid Password"); 
      return
    }
    else if(!isSignInForm && userNameRef.current.value === ""){
      setErrorMessage("Please add userName"); 
      return
    }
    if(errorMessage !== ""){return}
    setErrorMessage(""); 
    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: userNameRef.current.value, photoURL: "https://lh3.googleusercontent.com/ogw/AF2bZyhCwsehrRnopIu1G5wJdDN-KT2Fi6mKm5vMHwrAP6dbGg=s64-c-mo"
        }).then(() => {
          // Profile updated!
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        }).catch((error) => {
          setErrorMessage(error.message)
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setErrorMessage(errorCode +"-"+ errorMessage);
      });

    }
    else {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode +"-"+ errorMessage);
      });
    }
    
  }

  return (
    <>
      <Header></Header> 
      <div className="bg-[#000] min-h-[100vh]">
        <img
          className="opacity-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_large.jpg"
        />
      </div>
      <div className="bg-[#000000b3] w-[450px] h-[auto] absolute rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[50px]">
        <form onSubmit={(e)=>e.preventDefault()} className="w-[100%] text-[#fff]">
          <h1 className="text-[#fff] mb-6 text-[25px]">{isSignInForm?"Sign In":"Sign Up"}</h1>
          {!isSignInForm &&<div className="w-[100%]">
            <input
              type="text"
              ref={userNameRef}
              className="bg-[#000000b3] mb-6 p-2 rounded-sm w-[100%] text-sm border border-1 border-[#fbfbfb40]"
              placeholder="Full Name"
            />
          </div>}
          <div className="w-[100%]">
            <input 
              ref={emailRef}
              type="text"
              className="bg-[#000000b3] mb-6 p-2 rounded-sm w-[100%] text-sm border border-1 border-[#fbfbfb40]"
              placeholder="Email"
            />
          </div>
          <div className="w-[100%]">
            <input
              ref={passwordRef}
              type="password"
              className="bg-[#000000b3] mb-6 p-2 rounded-sm w-[100%] text-sm border border-1 border-[#fbfbfb40]"
              placeholder="Password"
            />
          </div>
          <button
            type="button"
            className="w-[100%]  bg-red-700 mb-6 p-2 rounded-sm"
            onClick={onClickHandler}
          >
            {isSignInForm?"Sign In":"Sign Up"}
          </button>
          <p className="text-xs cursor-pointer" onClick={()=>setIsSignInForm(prev=>!prev)}>
            {isSignInForm?"New to Netflix? Sign Up Now":"Already registered? Sign In Now"}
          </p>
          {errorMessage && <p className="text-red-600 text-center text-xs mt-2">{errorMessage}</p>}
        </form>
      </div>
    </>
  );
}

export default Login;
