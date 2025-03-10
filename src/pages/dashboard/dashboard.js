import React, { useState, useEffect } from 'react';
import Sidenav from './components/sidenav';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUserData(JSON.parse(storedUser));
        }
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <main className="flex flex-col md:flex-row h-full">
    {/* SideNav for larger screens */}
    <Sidenav />

    <div className="ml-[15%] flex flex-col items-center justify-center w-full min-h-screen px-4 md:px-8 text-center">
        <div className="max-w-xl mx-auto">
            <h2 className="text-gray-800 text-3xl md:text-4xl font-extrabold">
                Welcome, {userData.firstName} {userData.surname}!
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
                Welcome to your interactive hospital portal! We're here to help make your visit as easy and enjoyable as possible. Whether you're here for a check-up, treatment, or just visiting, you can explore fun games, learn about the hospital, and find everything you need right from your tablet.
                <br /><br />
                Click below to start your journey:
                <br />
                <strong>Explore the Hospital</strong> - Learn about different areas like the play zones, MRI, X-rays, and more!
                <br />
                <strong>Activities & Games</strong> - Play games and do fun activities to pass the time.
                <br />
                <strong>For Parents & Guardians</strong> - Helpful information for your caregivers to make your visit smoother.
                <br /><br />
                Let's make your hospital visit a little brighter! 
            </p>

            <a href='#'>
                <img
                    src={`${process.env.PUBLIC_URL}/images/hospital.gif`}
                    alt='Hospital'
                    className="w-full md:w-80 my-8 mx-auto block"
                />
            </a>
        </div>
    </div>
</main>

        </>
    );
};

export default Dashboard;
