import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
    const [isShow, setIsShow] = useState(false);

    return (
        <div className=" bg-slate-600  h-20 z-10 sticky top-0">
            <nav className="container md:flex justify-between items-center py-4 relative">
                <div className="logo text-left text-white">
                    <h2 className="text-2xl  font-bold ">LOGO</h2>
                </div>
                <div className="md:mt-0 mt-[40px] ">
                    <ul
                        className={`md:flex gap-3 transition ease-in duration-1000 ${
                            isShow ? "block" : "hidden"
                        }`}
                    >
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/posts">Posts</NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </ul>
                    <div
                        onClick={() => setIsShow(!isShow)}
                        className=" w-6 h-6 md:hidden cursor-pointer absolute right-5 top-5 "
                    >
                        {isShow ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
