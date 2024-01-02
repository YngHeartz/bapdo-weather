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

    let imageUrl='';

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

        // Add logic to determine the appropriate image based on weather conditions
        // For example, if it's raining, set imageUrl to the rain image URL
        // You'll need to replace 'rain-image-url' with the actual URL of your rain image
        // imageUrl = 'rain-image-url';
    }

    return (
        <>
            <input type="text" value={location} onChange={handleInputChange} placeholder="Enter location" />
            {/* <img src={imageUrl} alt="Weather condition" /> */}
        </>
    );
}

export default Input;
