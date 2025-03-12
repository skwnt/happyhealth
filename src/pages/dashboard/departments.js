import React, { useState, useEffect } from 'react';
import Sidenav from './components/sidenav'; // Ensure Sidenav is imported
import { Link } from 'react-router-dom'; // Import Link for internal navigation

function Departments() {
    const [departments, setDepartments] = useState([]); // State to hold departments data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        // Fetch the department data from backend
        const fetchDepartments = async () => {
            try {
                const response = await fetch("http://localhost:5001/departments"); // Replace with your backend URL
                if (!response.ok) {
                    throw new Error("Failed to fetch departments");
                }
                const data = await response.json();
                setDepartments(data); // Store departments data
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDepartments();
    }, []); // Runs only once when component mounts

    if (loading) {
        return <p className="text-center p-4">Loading departments...</p>;
    }

    if (error) {
        return <p className="text-center p-4 text-red-600">Error: {error}</p>;
    }

    return (
        <main className="flex flex-col md:flex-row h-full">
            {/* Include the Sidenav component */}
            <Sidenav />

            <div className="flex flex-col w-full ml-[25%] p-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Hospital Departments</h2>

                {/* Departments Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                    {departments.map((dept) => (
                        <div key={dept.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            {/* <img src={dept.image_url} alt={dept.name} className="w-full h-48 object-cover" /> */}
                            <img src={`/images/department/${dept.image_url}`} alt="Department" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900">{dept.name}</h3>
                                <p className="text-gray-700 text-sm mt-2">{dept.description}</p>

                                {/* Button to navigate to department details */}
                                <Link 
                                    to={`/department/${dept.id}`} 
                                    className="block text-center mt-4 bg-[#33CCCC] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#33CCCC] transition">
                                    Visit {dept.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Hospital Image */}
                <a href="#">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/corporate-culture.gif`}
                        alt="departments"
                        className="w-full md:w-80 my-8 mx-auto block"
                    />
                </a>
            </div>
        </main>
    );
}

export default Departments;
