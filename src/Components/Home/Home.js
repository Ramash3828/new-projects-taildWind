import React from "react";
import { Link } from "react-router-dom";
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
            <div className="container text-white">
                <div className="hero-left flex flex-col items-center justify-center h-screen">
                    <h2 className="text-6xl font-bold mb-3 uppercase">
                        Welcome to our website
                    </h2>
                    <p className="w-1/2 my-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente corrupti, quam perspiciatis suscipit Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente corrupti, quam perspiciatis suscipit
                        accusantium mollitia laudantium animi ea cupiditate
                        obcaecati numquam amet quaerat non assumenda eligendi
                        quo inventore eos quidem!
                    </p>
                    <Link to={"/contact"}>CONTACT ME</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
