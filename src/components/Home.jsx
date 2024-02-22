import React from "react";
import { Outlet } from "react-router-dom";
const Home = () => {
    return (
        <>
        <h1>Home</h1>
        <p>We are on home!</p>
        <Outlet />
        </>
    )
}

export default Home;