import React from "react";

const Header = () => {
    return (
        <div className="container mx-auto px-20">
            <nav className="md:flex justify-between">
                <div className="logo">
                    <h2 className="text-2xl py-2 font-bold ">LOGO</h2>
                </div>
                <navbar>
                    <ul className="md:flex gap-3">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Product</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Login</a>
                        </li>
                    </ul>
                </navbar>
            </nav>
        </div>
    );
};

export default Header;
