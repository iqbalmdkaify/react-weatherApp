import React from "react";

function Forecast({ date, weatherIconCodeUrl, temperature }) {
    function getDayOfWeek(date) {
        const dayOfWeek = new Date(date).getDay();
        let dayString = isNaN(dayOfWeek)
            ? null
            : [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
              ][dayOfWeek];

        return dayString.slice(0, 3);
    }

    return (
        <div className=" flex flex-col gap-2 py-1 px-2 items-center">
            <p className=" font-medium">{getDayOfWeek(date).toUpperCase()}</p>
            {/* current hour forecast weather logo icon */}
            <img
                src={`src/assets/${weatherIconCodeUrl}.png`}
                className=" w-[3rem] h-[3rem]"
            />
            <p className=" font-medium">{temperature}&deg;</p>
        </div>
    );
}

export default Forecast;
