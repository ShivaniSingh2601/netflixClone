import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
// import "./scss/index.css";

const AppLayout = () => {

    return (<h1 className="text-red-600">Hello</h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);