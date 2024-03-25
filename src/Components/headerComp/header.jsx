import React from 'react';
import weather from "../../assets/weather.json"; // Adjusted import path
import Lottie from 'lottie-react';

const Headerofsite = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-10 ">
            <h1 className="font-extrabold text-6xl mb-4 bg-pink-200 rounded-xl p-7" id='Home'>Bapdo Weather</h1>
            <Lottie animationData={weather} className='size-80' />

        </div>
    );
}

export default Headerofsite;
