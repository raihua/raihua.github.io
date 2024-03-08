import React from "react";

const Projects = () => {
    return (
        <>
            <h1>My Projects</h1>
            <div>
                <h2>ElectroForesight Dashboard</h2>
                <p>ElectroForesight Dashboard displays forecasts for the impact of electricity vehicles on energy consumption.</p>
                <p>Using the dataset provided for the SA Power Networks challenge, I applied machine learning
                    using the arima model to predict future energy consumption values by dividing the dataset into training and testing data.</p>
                <p>Together I combined with 4 other people to create the dashboard using React resulting in us winning the hackathon challenge.</p>
            </div>

            <div>
                <h2>MF Data Manager</h2>
                <p>This is a data management system with a key performance indicator dashboard</p>
                <p>During this project, I worked on the frontend with react and backend with aspnet.</p>
                <p>I secured the application using auth0 so that I could later deploy it with azure web apps.</p>
            </div>
        </>
    )
}

export default Projects;