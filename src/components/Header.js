import React,{ useEffect }  from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utlis/firbase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utlis/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store=>store.user)
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
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
          navigate("/browse");
          // ...
        } else {
          dispatch(removeUser());
          navigate("/");
          // User is signed out
          // ...
        }
      });
    }, []);

  return (<>
    <div className="absolute top-[0px] left-0 right-0">
      <div className="absolute top-[10px] left-[150px] z-10">
        <img
          className="h-[80px]"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
      </div>
      {user && <>
        <div className="flex justify-end p-2">
            <div className="h-[35px] w-[35px] rounded mr-4">
              <img className="h-[100%] w-[100%] object-center" src={user.photoURL}/>
            </div>
          <button onClick={signOutHandler}>Sign Out</button>
        </div>
      </>
    }
    </div>
    </>
  );
};

export default Header;
