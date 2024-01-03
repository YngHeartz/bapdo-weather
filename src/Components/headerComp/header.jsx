import React from 'react';

const Headerofsite = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="font-extrabold text-4xl mb-4">Bapdo Weather</h1>
            <img 
                className="w-40 h-40 object-cover rounded-full" 
                src="src/assets/weather_dribbble_size.gif.gif"
                alt="Weather GIF"
            />
        </div>
    );
}

export default Headerofsite;
