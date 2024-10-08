// src/components/ActorCard.js

import React, { useEffect, useState } from 'react';

const ActorCard = () => {
    const [actors, setActors] = useState([]);

    // Fetch actor data from backend
    useEffect(() => {
        fetch("http://moviesjsd.onrender.com/") // Adjust the API route as per your backend
            .then(response => response.json())
            .then(data => setActors(data))
            .catch(error => console.error('Error fetching actors:', error));
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <h1 className="text-3xl font-bold text-center mb-6">Famous Actor</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {actors.map((actor) => (
                    <div key={actor._id} className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl  font-bold text-blue-500  mb-3">{actor.name}</h2>
                        <p className="text-gray-700" >Profession: <span className="font-medium">{actor.profession}</span></p>
                        <p className="text-gray-700">Age: <span className="font-medium">{actor.age}</span></p>
                        <p className="text-gray-700">Nationality: <span className="font-medium">{actor.nationality}</span></p>
                        <p className="text-gray-700">Awards: <span className="font-medium">{actor.awards.join(', ')}</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActorCard;
