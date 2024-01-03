import React, { useState, useEffect } from "react";

const Input = () => {
    const [location, setLocation] = useState('');
    
    return (
        <div className="flex items-center justify-center mb-12 mt-2 ">
            <input className="p-2 border rounded shadow-md shadow-dark-600" type="text" placeholder="Enter location. . ." />
            {/* <img src={imageUrl} alt="Weather condition" /> */}
        </div>
    );
}

export default Input;
