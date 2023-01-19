import React from "react";

function AdditionalInfo({ precipitation, humidity, windSpeed }) {
    return (
        <div className=" mt-10 p-2 mx-2 bt-custom sm:mt-5">
            <h1 className=" font-medium text-lg mb-3 sm:text-center">
                Additional Info
            </h1>
            <div className=" flex flex-row justify-between sm:justify-around">
                <div>
                    <h3 className=" text-blue-800 sm:inline-block sm:mr-2 sm:text-lg">
                        Precipitation
                    </h3>
                    <p className=" font-medium sm:inline-block sm:text-lg">
                        {precipitation}%
                    </p>
                </div>
                <div>
                    <h3 className=" text-blue-800 sm:inline-block sm:mr-2 sm:text-lg">
                        Humidity
                    </h3>
                    <p className=" font-medium sm:inline-block sm:text-lg">
                        {humidity}%
                    </p>
                </div>
                <div>
                    <h3 className=" text-blue-800 sm:inline-block sm:mr-2 sm:text-lg">
                        Windy
                    </h3>
                    <p className=" font-medium sm:inline-block sm:text-lg">
                        {windSpeed} m/s
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AdditionalInfo;
