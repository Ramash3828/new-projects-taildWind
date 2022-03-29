import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div
            style={{
                background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://media.istockphoto.com/photos/skyscrapers-along-51st-street-in-midtown-manhattan-new-york-picture-id530972135?k=20&m=530972135&s=170667a&w=0&h=lE-S3EkTkZfGhB5cEucUeUYstsvNLef1c807Oo76G4M=')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="hero-area "
        >
            <div className="container"></div>
        </div>
    );
};

export default Home;
