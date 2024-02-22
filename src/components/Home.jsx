import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="container">
            <img className="profilePic" src="src/assets/peter-large.jpeg" alt="Peter Large" />
            <article>
                <h1>Peter Trinh</h1>
                <p>Software Engineer Student</p>
                <p>Hi there! Its great to have you as my visitor.</p>

            </article>
            <Outlet />
        </div>
    )
}

export default Home;