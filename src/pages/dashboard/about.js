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

                <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 md:px-8 text-center ml-[20%]">
                    <div className="max-w-1xl mx-auto">
                        <h2 className="text-gray-800 text-3xl md:text-4xl font-extrabold">
                            Welcome, {userData.firstName} {userData.surname}!
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
                            Welcome to the Children's Wing! Our new, state-of-the-art facility is designed with young patients in mind, providing a friendly and welcoming space where children can feel comfortable and cared for. With interactive features, fun activities, and engaging resources, we aim to make your time at the hospital as stress-free and enjoyable as possible.
                            The Children’s Wing is equipped with colorful, child-friendly spaces, play areas, and specialized medical departments designed to meet the unique needs of our younger patients. Whether you're here for an appointment, a procedure, or just visiting, we hope this portal will guide you through your experience and make it easier to understand everything happening around you.
                            We’re excited to be part of your health journey, and we’re committed to creating a positive, supportive environment for children and families at every step.
                        </p>

                        <a href='#'>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/interview.gif`}
                                alt='Interview'
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
