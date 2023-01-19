import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import WeatherPos from "./components/WeatherPos";
import HourlyForecast from "./components/HourlyForecast";
import AdditionalInfo from "./components/AdditionalInfo";
import Temperature from "./components/Temperature";
import axios from "axios";

const API_KEY = process.env.API_KEY;
function App() {
    const [currWeather, setCurrWeather] = useState([]);
    const [forecastData, setForecastData] = useState([]);
    const [loading, setLoading] = useState(true);

    function handleLocationSearch(locationName) {
        axios({
            url: `https://api.weatherbit.io/v2.0/forecast/daily?city=${locationName}&key=${API_KEY}`,
            method: "get",
            responseType: "json",
        })
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                const [todayData, ...restData] = data.data;
                setCurrWeather({
                    city_name: data.city_name,
                    country_code: data.country_code,
                    todayData,
                });

                setForecastData(restData);
                setLoading(false);
            });
    }

    function getMonth() {
        let result = new Date().toLocaleString("en-us", {
            month: "short",
            year: "numeric",
        });
        result = result.slice(0, 3);

        return result;
    }

    function getCurrDate() {
        const currDate = new Date();
        return `${getMonth()} ${currDate.getDate()}, ${currDate.getFullYear()}`;
    }

    return (
        <div className=" h-screen w-screen flex flex-col justify-between">
            <Navbar handleLocationSearch={handleLocationSearch} />
            {!loading && (
                <>
                    {/* shows city name, current date, and current weather status with a default image for the city */}
                    <WeatherPos
                        cityName={currWeather.city_name}
                        // the weekday changes its format when it crosses the sm breakpoint, Monday -> Mon
                        getCurrDate={getCurrDate}
                        weatherStatus={
                            currWeather.todayData.weather.description
                        }
                    />

                    {/* displays current weather hourly forecast for the specified region */}
                    <HourlyForecast
                        forecastData={forecastData}
                        // codesUrl={weatherCodesUrl}
                    />

                    {/* includes data for precipitation, humidity and wind-speed */}
                    <AdditionalInfo
                        precipitation={currWeather.todayData.pop}
                        humidity={currWeather.todayData.rh}
                        windSpeed={currWeather.todayData.wind_spd}
                    />

                    {/* displays the current day temperature in large font weight.
            Can be switched to specific weekdays later by a button on the right.
             */}

                    <Temperature
                        temperature={currWeather.todayData.high_temp}
                    />
                </>
            )}
        </div>
    );
}

export default App;
