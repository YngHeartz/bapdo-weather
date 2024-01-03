import React, { useState, useEffect } from "react";

const Input = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const API_KEY = "31599c86c9bbaf0199c446af849f68fc";

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
                if (!response.ok) {
                    throw new Error('Weather data not found');
                }
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                setError(error.message);
            }
        };

        if (location) {
            fetchWeatherData();
        }
    }, [location]);

    const handleInputChange = (e) => {
        setLocation(e.target.value);
    };

    return (
        <div className="flex items-center justify-center mb-12 mt-2">
            <div className="relative">
                <input
                    className="p-2 pr-10 border rounded shadow-md shadow-dark-600" 
                    type="text" 
                    value={location} 
                    onChange={handleInputChange} 
                    placeholder="Enter location. . ." 
                />
                <img 
                    src="src/assets/searchIcon.png" 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-20 h-8 cursor-pointer" 
                    alt=""
                    onClick={() => {
                        setLocation(location); // This will trigger the useEffect to fetch weather data
                    }}
                />
            </div>
            {weatherData && (
                <div className="mt-4">
                    {/* Display weather data here */}
                </div>
            )}
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}

export default Input;
