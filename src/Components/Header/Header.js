import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
const Header = () => {
    const [isShow, setIsShow] = useState(false);

    return (
        <div className=" bg-slate-600 transition ease-in duration-1000 h-20 z-10">
            <nav className="container md:flex justify-between items-center py-4 relative">
                <div className="logo text-left text-white">
                    <h2 className="text-2xl  font-bold ">LOGO</h2>
                </div>
                <div>
                    <ul
                        className={`md:flex gap-3 ${
                            isShow ? "block" : "hidden"
                        }`}
                    >
                        <li className="px-2 py-1 m-2 bg-slate-900 text-white border border-slate-900 hover:bg-transparent transition-all  rounded-md">
                            <Link to="/">Home</Link>
                        </li>

                        <li className="px-2 py-1 m-2 bg-slate-900 text-white border border-slate-900 hover:bg-transparent transition-all  rounded-md">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="px-2 py-1 m-2 bg-slate-900 text-white border border-slate-900 hover:bg-transparent transition-all  rounded-md">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="px-2 py-1 m-2 bg-slate-900 text-white border border-slate-900 hover:bg-transparent transition-all  rounded-md">
                            <Link to="/login">Login</Link>
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
