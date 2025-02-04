'use client';

import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
    const navLinks = [
        { name: "Home", href: "/", disabled: false },
        { name: "Models", href: "/categories", disabled: false },
        { name: "Applications", href: "/applications", disabled: true },
        { name: "Deployment", href: "/deployment", disabled: true },
        { name: "Company", href: "/company", disabled: true },
    ];

    return (
        <nav className="w-full flex justify-between items-center px-16 py-4 bg-white ">
            <div className="text-xl font-bold text-gray-800">
                Eval.ai
            </div>

            <div className="flex items-center gap-8">
                <ul className="flex gap-6 text-gray-500 font-medium">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.href}
                                className={`hover:text-gray-900 transition-colors ${link.disabled ? "disabled" : ""}`}
                                onMouseOver={(e) => {
                                    if (link.disabled) {
                                        e.preventDefault();
                                    }
                                }}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <button className="bg-black text-white flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-gray-800 transition">
                    Login
                    <GoArrowUpRight />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
