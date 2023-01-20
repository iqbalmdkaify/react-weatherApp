import React from "react";
import { useRef, useContext } from "react";
import { MdOutlineModeNight } from "react-icons/Md";
import { MdOutlineLightMode } from "react-icons/Md";
import { TbSearch } from "react-icons/tb";
import { ThemeContext } from "../App";

function Navbar({ handleLocationSearch, toggleActive }) {
    const locationSearchRef = useRef();

    const currTheme = useContext(ThemeContext);

    function getInputName() {
        const val = locationSearchRef.current.value;

        if (!val) {
            return;
        } else {
            return val;
        }
    }

    return (
        <div className=" flex flex-row justify-between p-4 w-full items-center">
            {currTheme === "dark" ? (
                <MdOutlineLightMode
                    className={`w-fit h-fit cursor-pointer sm:w-[2rem] ${currTheme}`}
                    onClick={() => {
                        toggleActive();
                    }}
                />
            ) : (
                <MdOutlineModeNight
                    className={`w-fit h-fit cursor-pointer sm:w-[2rem] ${currTheme}`}
                    onClick={() => {
                        toggleActive();
                    }}
                />
            )}
            <input
                type="text"
                className=" bg-sky-100 max-w-[60%] px-2 py-1 sm:max-w-md sm:text-xl grow focus:outline-none rounded-sm text-black"
                ref={locationSearchRef}
            />
            <TbSearch
                className=" w-fit h-fit cursor-pointer sm:w-[2rem]"
                onClick={() => {
                    const locationName = getInputName();
                    handleLocationSearch(locationName);
                }}
            />
        </div>
    );
}

export default Navbar;
