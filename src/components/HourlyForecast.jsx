import React from "react";
import Forecast from "./Forecast";

function HourlyForecast({ forecastData }) {
    return (
        // container div having 5 hour forecast
        <div className=" flex flex-row justify-around mx-2 px-1 py-1">
            {/* single forecast component, will be loop overed from the forecast data array */}
            {forecastData.map((forecastItem, idx) => (
                <Forecast
                    key={forecastItem.datetime}
                    date={forecastItem.datetime}
                    weatherIconCodeUrl={forecastItem.weather.icon}
                    temperature={forecastItem.high_temp}
                />
            ))}
        </div>
    );
}

export default HourlyForecast;
