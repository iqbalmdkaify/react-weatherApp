import React from "react";
import { useRef } from "react";
import { SlMenu } from "react-icons/sl";
import { TbSearch } from "react-icons/tb";

function Navbar({ handleLocationSearch }) {
    const locationSearchRef = useRef();

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
            <SlMenu className=" w-fit h-fit cursor-pointer sm:w-[2rem]" />
            <input
                type="text"
                className=" bg-sky-100 max-w-[60%] px-2 py-1 sm:max-w-md sm:text-xl grow focus:outline-none rounded-sm"
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
