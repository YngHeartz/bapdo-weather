import React, { useState } from "react";

const Input = () => {
    const [location, setLocation] = useState('');

    const search = () => {
        const element = document.getElementsByClassName("")
    }
    return (
        <div className="flex items-center justify-center mb-12 mt-2">
            <div className="relative">
                <input
                    className="p-2 pr-10 border rounded shadow-md shadow-dark-600" 
                    type="text" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)} 
                    placeholder="Enter location. . ." 
                />
                <img 
                    src="src/assets/searchIcon.png" 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-20 h-8" 
                    alt=""
                    onClick={() => {
                        search()
                    }}
                />
            </div>
        </div>
    );
}

export default Input;
