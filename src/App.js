import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login";

const AppLayout = () => {

    return (<div className="relative">
      <Login/>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);