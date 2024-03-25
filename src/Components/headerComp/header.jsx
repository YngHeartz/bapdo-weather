import React from 'react';
import weather from "../../assets/weather.json"; // Adjusted import path
import Lottie from 'lottie-react';

const Headerofsite = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-10 ">
            <h1 className="font-extrabold text-6xl mb-4 text-blue-300" id='Home'>Bapdo Weather</h1>
            <Lottie animationData={weather} className='size-80' />

        </div>
    );
}

export default Headerofsite;
