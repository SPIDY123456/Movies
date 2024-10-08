

import React, { useEffect, useState } from 'react';

const ActorTable = () => {
    const [actors, setActors] = useState([]);

    
    useEffect(() => {
        fetch("http://moviesjsd.onrender.com/") 
            .then(response => response.json())
            .then(data => setActors(data))
            .catch(error => console.error('Error fetching actors:', error));
    }, []);

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8">Famous Actors List</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md  text-center rounded-lg">
                    <thead>
                        <tr className="bg-yellow-300 text-black text-center">
                            <th className="py-3 px-4 uppercase font-bold text-lg">Name</th>
                            <th className="py-3 px-4 uppercase font-bold text-lg">Profession</th>
                            <th className="py-3 px-4 uppercase font-bold text-lg">Age</th>
                            <th className="py-3 px-4 uppercase font-bold text-lg">Nationality</th>
                            <th className="py-3 px-4 uppercase font-bold text-lg">Awards</th>
                        </tr>
                    </thead>
                    <tbody>
                        {actors.map((actor) => (
                            <tr key={actor._id} className="hover:bg-gray-200">
                                <td className="py-5 px-4">{actor.name}</td>
                                <td className="py-3 px-4">{actor.profession}</td>
                                <td className="py-3 px-4">{actor.age}</td>
                                <td className="py-3 px-4">{actor.nationality}</td>
                                <td className="py-3 px-4">{actor.awards.join(', ')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ActorTable;
