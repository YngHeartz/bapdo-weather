import React from "react";

const WeatherCard = ({ weatherData }) => {
    // If there is no data to return nothing will be returned to the user
    if (!weatherData) return null;

    // Calculate temperature in Fahrenheit and round it to two decimal places
    const temperatureF = ((weatherData.main.temp - 273.15) * 9/5 + 32).toFixed(0);

    // Construct the URL for the weather icon
    const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

    return (
        <div className="mt-2 text-xl">
            <h1 className="bg-gray-600 rounded-md text-center text-white m-3 p-3">Location: {weatherData.name}</h1>
            <div className="bg-gray-600 rounded-md text-white m-5 p-3">
                <p>Temperature: {temperatureF}F</p>
                <p>Description: {weatherData.weather[0].description}</p>
                <img className="mt-5 ml-14" src={iconUrl} alt={weatherData.weather[0].description} />
            </div>
        </div>
    );
}

export default WeatherCard;
