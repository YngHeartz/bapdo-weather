import React, { useState } from "react";
import WeatherCard from "../weatherCardComp/weatherCard";

const Input = () => {
    //Variables for the location, weather, and error message
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [showWeather, setShowWeather] = useState(false); // State to manage visibility

    //Database Connection key
    const API_KEY = "31599c86c9bbaf0199c446af849f68fc";

    const fetchWeatherData = async () => {
        //Fetches the api if the api connection is succesful we will be able to provide the weather information if not we will return the error message "Weather data not found"
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
            if (!response.ok) {
                throw new Error('Weather data not found');
            }
            const data = await response.json();
            setWeatherData(data);
            setShowWeather(true);
            setError(null); 
        } catch (error) {
            setError(error.message);
        }
    };
    // handle for when data is entered into the input field
    const handleInputChange = (e) => {
        setLocation(e.target.value);
    };
    // allows the enter key to fetch the data from the api same as hitting the submit button
    const handleKeyDown = (e) => {
        // Check if the Enter key (keyCode 13) is pressed
        if (e.keyCode === 13) {
            fetchWeatherData();
        }
    };
    //render the fields for the iput card and output card
    return (
        <div className="flex flex-col items-center justify-center mb-12 mt-2 text-xl">
            <div className="relative mb-4">
                <input
                    className="p-2 pr-10 border rounded shadow-md shadow-dark-600"
                    type="text"
                    value={location}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown} // Add this line
                    placeholder="Enter location. . ."
                />
                {/* This is the submit button to fetch he data from the api */}
                <button
                    onClick={fetchWeatherData}
                    className="absolute top-3.5 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded m-2"
                >
                    Search
                </button>
            </div>

            {/* Displays the error if the data is not valid */}
            {error && <div className="mb-4 text-red-500">{error}</div>}

            {/* This is where the weather data will appear but will only appear when data is entered into the field and fetched from the api if not it will stay hidden */}
            {weatherData && (
                <div className="border p-4 rounded shadow-md mt-20">
                    {showWeather && <WeatherCard weatherData={weatherData} />}
                </div>
            )}
        </div>
    );
}

export default Input;
