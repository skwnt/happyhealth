import React, { useState, useEffect } from 'react';
import Sidenav from './components/sidenav'; // Ensure Sidenav is imported

function Games() {
    const [games, setGames] = useState([]); // State to hold games data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const [userData, setUserData] = useState(null); // To store user data

    useEffect(() => {
        // Fetch the games from the backend API
        const fetchGames = async () => {
            try {
                const response = await fetch("http://localhost:5001/games"); // Replace with your backend URL
                if (!response.ok) {
                    throw new Error("Failed to fetch games");
                }
                const data = await response.json();
                setGames(data); // Store the games data
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        // Fetch user data from local storage (or backend if necessary)
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUserData(JSON.parse(storedUser)); // Assuming the user's DOB is stored here
        }

        fetchGames();
    }, []); // Empty dependency array ensures this runs only once

    // Function to calculate the age based on DOB
    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth();
        if (month < birthDate.getMonth() || (month === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    // Filter games by age restriction
    const filteredGames = games.filter(game => {
        if (userData && userData.dob) {
            const userAge = calculateAge(userData.dob);
            return userAge >= game.age_restriction;
        }
        return false; // If no user data, don't display games
    });

    if (loading) {
        return <p>Loading games...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <main className="flex flex-col md:flex-row h-full">
            {/* Include the Sidenav component */}
            <Sidenav />

            <div className="flex flex-col w-full ml-[25%] p-4">
                <div></div>
                <div className="games-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                    {filteredGames.length > 0 ? (
                        filteredGames.map((game) => (
                            <div key={game.id} className="game-card bg-white shadow rounded-lg overflow-hidden">
                                <a href={game.game_url} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={game.game_img}
                                        alt={game.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-900">{game.name}</h3>
                                        <p className="text-gray-700 text-sm mt-2">{game.details}</p>
                                        <p className="text-gray-500 text-sm mt-2">
                                            Age Restriction: {game.age_restriction}+
                                        </p>
                                    </div>
                                </a>
                            </div>
                        ))
                    ) : (
                        <p>No games available for your age group.</p>
                    )}
                </div>
                <a href='#'>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/game-controller.gif`}
                        alt='Hospital'
                        className="w-full md:w-80 my-8 mx-auto block"
                    />
                </a>
            </div>
        </main>
    );
}

export default Games;
