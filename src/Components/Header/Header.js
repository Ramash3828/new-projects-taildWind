import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
const Header = () => {
    const [isShow, setIsShow] = useState(false);

    return (
        <div className="container bg-slate-600 transition ease-in duration-1000">
            <nav className="md:flex justify-between items-center py-4 relative">
                <div className="logo text-left">
                    <h2 className="text-2xl py-2 font-bold ">LOGO</h2>
                </div>
                <navbar>
                    <ul
                        className={`md:flex gap-3 ${
                            isShow ? "block" : "hidden"
                        }`}
                    >
                        <li className="px-2 py-1 m-2 bg-slate-900 text-white border border-slate-900 hover:bg-transparent transition-all  rounded-md">
                            <a href="/">Home</a>
                        </li>
                        <li className="px-2 py-1 m-2 bg-slate-900 text-white border border-slate-900 hover:bg-transparent transition-all  rounded-md">
                            <a href="/">Product</a>
                        </li>
                        <li className="px-2 py-1 m-2 bg-slate-900 text-white border border-slate-900 hover:bg-transparent transition-all  rounded-md">
                            <a href="/">Contact</a>
                        </li>
                        <li className="px-2 py-1 m-2 bg-slate-900 text-white border border-slate-900 hover:bg-transparent transition-all  rounded-md">
                            <a href="/">About</a>
                        </li>
                        <li className="px-2 py-1 m-2 bg-slate-900 text-white border border-slate-900 hover:bg-transparent transition-all  rounded-md">
                            <a href="/">Login</a>
                        </li>
                    </ul>
                    <div
                        onClick={() => setIsShow(!isShow)}
                        className=" w-6 h-6 md:hidden cursor-pointer absolute right-5 top-5 "
                    >
                        {isShow ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                    </div>
                </navbar>
            </nav>
        </div>
    );
};

export default Header;
