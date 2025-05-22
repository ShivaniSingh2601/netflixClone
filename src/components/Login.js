import React, { useState, useEffect, useRef } from "react";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage]= useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onClickHandler = () => {
    const emailValidate =(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(emailRef.current.value);
    const passwordValidate = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%^&*])(.{8,})$/).test(passwordRef.current.value);
    if(!emailValidate){
      setErrorMessage("Please Enter valid email");
    }
    else if(!passwordValidate){
      setErrorMessage("Invalid Password");
    }
    setErrorMessage(" "); 
    console.log(emailRef.current.value,passwordRef.current.value);
    console.log(emailValidate,passwordValidate)
  }

  return (
    <>
      <div className="bg-[#000] min-h-[100vh]">
        <img
          className="opacity-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_large.jpg"
        />
      </div>
      <div className="absolute top-[10px] left-[150px] z-10 ">
        <img
          className="h-[80px]"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
      </div>
      <div className="bg-[#000000b3] w-[450px] h-[auto] absolute rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[50px]">
        <form onSubmit={(e)=>e.preventDefault()} className="w-[100%] text-[#fff]">
          <h1 className="text-[#fff] mb-6 text-[25px]">{isSignInForm?"Sign In":"Sign Up"}</h1>
          {!isSignInForm &&<div className="w-[100%]">
            <input
              type="text"
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
          <p className="text-red-600 text-center text-xs mt-2">{errorMessage}</p>
        </form>
      </div>
    </>
  );
}

export default Login;
