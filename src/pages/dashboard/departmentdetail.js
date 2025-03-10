import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidenav from './components/sidenav';
import './stretch.css';

function DepartmentDetail() {
    const { id } = useParams();
    const [department, setDepartment] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDepartment = async () => {
            try {
                const response = await fetch(`http://localhost:5001/departments/${id}`);
                if (!response.ok) {
                    throw new Error("Department not found");
                }
                const data = await response.json();
                setDepartment(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDepartment();
    }, [id]);

    if (loading) return <p className="text-center p-4">Loading department...</p>;
    if (error) return <p className="text-center p-4 text-red-600">Error: {error}</p>;

    return (
        <>
            <div className="flex flex-col md:flex-row h-full">
                <Sidenav />
                <div className="flex flex-col w-full ml-[25%] p-4">
                    <div className="bg-white relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                        <img src={department.bannerImage} alt="Banner" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="relative z-50 h-full flex flex-col justify-center items-center text-center text-white p-6">
                            <h2 className="text-4xl font-bold mb-6">{department.name} Department</h2>
                            <p className="text-lg text-gray-200">Welcome to the {department.name} department</p>
                            <p className="text-lg text-gray-200">Click below to see what happens at your appointment</p>
                        </div>
                    </div>
                    
                    <div className="font-sans bg-white mb-10 max-w-5xl mx-auto mt-4">
                        <h2 className="text-3xl font-extrabold border-b-2 border-gray-800 inline-block">Our Team</h2>
                        <div className="grid lg:grid-cols-2 gap-6 mt-12">
                            {department.team.map((member, index) => (
                                <div key={index} className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg relative">
                                    <div className="col-span-2 min-h-[190px]">
                                        <img src={`/assets/images/department/${member.image}`} className="rounded-lg" alt={member.name} />
                                    </div>
                                    <div className="bg-white rounded-lg p-4 absolute right-4 shadow-md">
                                        <h4 className="text-gray-800 text-sm font-bold">{member.role}</h4>
                                        <p className="text-[10px] text-gray-500 mt-0.5">{member.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-100 px-10 py-12">
                        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">{department.name} Videos</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {department.videos.map((video, index) => (
                                <div key={index} className="bg-white rounded overflow-hidden">
                                    <iframe
                                        width="360"
                                        height="215"
                                        src={`https://www.youtube.com/embed/${video}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-100 px-10 py-12">
                        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">{department.name} Images</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {department.images.map((img, index) => (
                                <div key={index} className="bg-white rounded overflow-hidden">
                                    <img src={`/assets/images/department/${img}`} alt="Department" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DepartmentDetail;
