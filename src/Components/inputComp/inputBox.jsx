import React, { useState } from "react";
import WeatherCard from "../weatherCardComp/weatherCard";

const Input = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [showWeather, setShowWeather] = useState(false); // State to manage visibility

    const API_KEY = "31599c86c9bbaf0199c446af849f68fc";

    const fetchWeatherData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
            if (!response.ok) {
                throw new Error('Weather data not found');
            }
            const data = await response.json();
            setWeatherData(data);
            setShowWeather(true); // Set to true once data is fetched
            setError(null); 
        } catch (error) {
            setError(error.message);
        }
    };

    const handleInputChange = (e) => {
        setLocation(e.target.value);
    };

    return (
        <div className = "flex flex-col items-center justify-center mb-12 mt-2">
            <div className = "relative mb-4">
                <input
                    className = "p-2 pr-10 border rounded shadow-md shadow-dark-600" 
                    type = "text" 
                    value={location} 
                    onChange={handleInputChange} 
                    placeholder="Enter location. . ." 
                />
                <button 
                    onClick = {fetchWeatherData} 
                    className = "absolute top-3.5 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded m-2"
                >
                    Search
                </button>
            </div>
            
            {error && <div className="mb-4 text-red-500">{error}</div>}
            
            {/* Separate card for WeatherCard component */}
            <div className = "border p-4 rounded shadow-md mt-20">
                {showWeather && <WeatherCard weatherData = {weatherData} />}
            </div>
        </div>
    );
}

export default Input;
