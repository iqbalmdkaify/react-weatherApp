import React from "react";

function WeatherPos({ cityName, getCurrDate }) {
    return (
        <div className=" flex flex-col gap-1 px-4 py-2 sm:py-1">
            <h1 className=" font-medium text-2xl sm:text-3xl">{cityName}</h1>
            <p className=" sm:text-xl">{getCurrDate()}</p>
            <p className=" font-medium text-blue-800">Cloudy</p>
        </div>
    );
}

export default WeatherPos;
