import React from "react";

function Temperature({ temperature }) {
    return (
        <div className=" flex flex-row items-center justify-center">
            <h1 className=" temp-size font-normal sm:temp-size-big">
                {temperature}&deg;
            </h1>
        </div>
    );
}

export default Temperature;
