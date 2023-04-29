import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Logout from "./components/Logout"
import Register from "./components/Register";
import Home from "./components/Home";

function Urls(props) {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* <Route exact path="/login/"> <Login {...props} /> </Route> */}
                    <Route exact path="/login/" element={<Login/>} />
                    <Route path="/register/" element={<Register/>} />
                    <Route path="/logout/" element={<Logout/>} />
                    <Route path="/" element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default Urls;