import React, { useState, useEffect } from "react";

const Input = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.WEATHER_API_KEY}`);
            const data = await response.json();
            setWeatherData(data);
        };

        if (location) {
            fetchWeatherData();
        }
    }, [location]);

    const handleInputChange = (e) => {
        setLocation(e.target.value);
    };

    let imageUrl = '';

    if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
        const mainWeatherCondition = weatherData.weather[0].main;

        switch (mainWeatherCondition) {
            case 'Rain':
                imageUrl = 'rainy-weather.png';
                break;
            case 'Wind':
                imageUrl = 'windy-weather.png';
                break;
            case 'Thunderstorm':
                imageUrl = 'stormy-weather.png';
                break;
            case 'Clear':
                imageUrl = 'night-weather.png';
                break;
            default:
                imageUrl = 'default-weather.png';
                break;
        }
    }

    return (
        <div className="flex items-center justify-center mb-12 mt-2 ">
            <input className="p-2 border rounded shadow-md shadow-dark-600" type="text" value={location} onChange={handleInputChange} placeholder="Enter location. . ." />
            {/* <img src={imageUrl} alt="Weather condition" /> */}
        </div>
    );
}

export default Input;
