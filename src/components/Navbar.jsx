import React from "react";
const Navbar = () => {
    return(
        <>
            <nav className="bg-violet-950 p-4">
                <div className="w-11/12 mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-bold">iTask</div>
                    {/* <ul className="flex space-x-4">
                        <li><a href="#" className="cursor-pointer text-white hover:text-gray-400 transition-all duration-50">Home</a></li>
                        <li><a href="#" className="cursor-pointer text-white hover:text-gray-400 transition-all duration-50">Your Tasks</a></li>
                    </ul> */}
                </div>
            </nav>
        </>
    )
}
export default Navbar;