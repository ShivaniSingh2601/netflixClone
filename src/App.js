import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch } from "react-redux";
import appStore from "./utlis/appStore";
import Body from "./components/Body";

const AppLayout = () => {

  return (
    <Provider store={appStore}>
      <Body/>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
