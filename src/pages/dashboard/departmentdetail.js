import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidenav from './components/sidenav';

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
                    
                    {/* Banner Section */}
                    <div className="bg-[white] relative font-sans before:absolute before:w-full before:h-full before:inset-0  before:opacity-50 before:z-10">
                        <div className="relative z-50 h-full flex flex-col justify-center items-center text-center text-[#33CCCC] p-6">
                            <h2 className="text-4xl font-bold mb-6">{department.name} Department</h2>
                            <p className="text-lg text-gray-800">{department.details}</p>
                        </div>
                    </div>

                    {/* Doctor and Nurse Info */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-gray-100 p-6 rounded-lg mt-6">
                        <div className="text-center">
                            <img src={`/images/department/${department.doctor_img}`} alt={department.doctor} className="w-40 h-40 rounded-full mx-auto mb-3" />
                            <h3 className="text-lg font-bold">{department.doctor}</h3>
                            <p className="text-sm text-gray-500">Lead Doctor</p>
                        </div>
                        <div className="text-center">
                            <img src={`/images/department/${department.nurse_img}`} alt={department.nurse} className="w-40 h-40 rounded-full mx-auto mb-3" />
                            <h3 className="text-lg font-bold">{department.nurse}</h3>
                            <p className="text-sm text-gray-500">Head Nurse</p>
                        </div>
                    </div>

                    {/* Videos Section */}
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

                    {/* Images Section */}
                    <div className="bg-gray-100 px-10 py-12">
                        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">{department.name} Images</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {department.dept_img.map((img, index) => (
                                <div key={index} className="bg-white rounded overflow-hidden">
                                    <img src={`/images/department/${img}`} alt="Department" />
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
