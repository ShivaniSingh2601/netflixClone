import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utlis/firbase";
import { addUser, removeUser } from "../utlis/userSlice";
import Login from "../components/Login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Browser from "../components/Browser";
import { useDispatch } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        // ...
      } else {
        dispatch(removeUser());
        // User is signed out
        // ...
      }
    });
  }, []);
  return (
    <div className="relative">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browser />,
  },
]);

export default Body;
