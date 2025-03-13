import React from "react";
import { Link } from "react-router-dom";

// Initialization for ES Users
const Navigation = ({ isLoggedIn, handleLogout }) => {
    return (
        <nav className="bg-[#33CCCC]">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-center">
                    {/* Flex container for both the image and the header text */}
                    <div className="flex items-center justify-center space-x-4">
                        {/* Logo Image */}
                        <Link to="/">
                            <img
                                className="h-8 w-auto cursor-pointer"
                                src={`${process.env.PUBLIC_URL}/images/cure.png`}
                                alt="HappyHealth Portal"
                            />
                        </Link>

                        {/* Header Text */}
                        <header className="text-white text-center">
                            <h1 className="text-2xl font-bold">HappyHealth Portal</h1>
                        </header>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
