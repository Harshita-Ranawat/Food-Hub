import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-1">
      <div><span ><img  className="h-10 w-10"src="./src/assets/logo-food.png" alt="Description of the image" /></span>
        <h3 className="text-xl font-bold text-black
        ">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        
        <h1 className="text-2xl font-bold ">Food Hub</h1>
        
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-green-500 text-green-500 rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
