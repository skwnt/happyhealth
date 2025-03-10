import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="font-[sans-serif] max-w-6xl max-md:max-w-md mx-auto text-center">
            <div className="grid md:grid-cols-2 items-center md:gap-10 gap-6">
                <div className="max-md:order-1">

                    <h2 className="text-gray-800 md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">Welcome to HappyHealth Portal</h2>
                    <p className="mt-5 text-base text-black leading-relaxed">Welcome to our interactive patients' portal – designed with children and their families in mind! As part of the exciting new children's wing at your local hospital, this portal is here to make your visit as smooth and enjoyable as possible. Whether you're waiting in the clinic, resting in your hospital room, or accessing information from home, our portal is the perfect companion. With a bright, engaging interface, it's easy for children aged 2-18 to navigate through a world of helpful content, all tailored to their age and needs.
                        Explore interactive animations, fun graphics, and clear, simple text to learn about the hospital’s departments, including x-ray, MRI, clinics, wards, play areas, and more. For younger patients, everything is designed to be intuitive, while older kids can dive deeper into more detailed information. Our goal is to help make hospital visits less stressful and a little more fun, with a portal that’s accessible on tablets in the hospital and on your devices at home. We’re excited to be part of your journey to better health!</p>

                </div>
            </div>

            <div className="my-6">
                <img
                    src={`${process.env.PUBLIC_URL}/images/ambulance.gif`}
                    alt="Ambulance"
                    className="mx-auto"
                />
            </div>

            <div className="my-6">
                <div className="mb-4">
                    <Link to="/login">
                        <button
                            type="button"
                            className="flex max-w-sm w-full bg-white border-2 border-[#33CCCC] text-[#33CCCC] hover:bg-[#33CCCC] hover:text-white focus:outline-none text-2xl uppercase font-bold shadow-md rounded-lg mx-auto p-5 transition duration-300"
                        >
                            <div className="flex sm:flex-cols-12 gap-6">
                                <div className="col-span-1"></div>
                                <div className="col-span-2 pt-1.5">Login</div>
                            </div>
                        </button>
                    </Link>
                </div>

                <div className="mb-4">
                    <Link to="/register">
                        <button
                            type="button"
                            className="flex max-w-sm w-full bg-white border-2 border-[#33CCCC] text-[#33CCCC] hover:bg-[#33CCCC] hover:text-white focus:outline-none text-2xl uppercase font-bold shadow-md rounded-lg mx-auto p-5 transition duration-300"
                        >
                            <div className="flex sm:flex-cols-12 gap-6">
                                <div className="col-span-1"></div>
                                <div className="col-span-2 pt-1.5">Register</div>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center">
                <img src="https://readymadeui.com/google-logo.svg" className="w-28 mx-auto" alt="google-logo" />
                <img src="https://readymadeui.com/facebook-logo.svg" className="w-28 mx-auto" alt="facebook-logo" />
                <img src="https://readymadeui.com/linkedin-logo.svg" className="w-28 mx-auto" alt="linkedin-logo" />
                <img src="https://readymadeui.com/pinterest-logo.svg" className="w-28 mx-auto" alt="pinterest-logo" />
            </div>
        </div>
    );
}

export default Home;
