import React from "react";
import Login from "../components/Login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Browser from "../components/Browser";

const Body = () => {
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
