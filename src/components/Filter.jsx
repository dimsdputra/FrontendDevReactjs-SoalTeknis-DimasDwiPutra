import React, {useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Filter = () => {
  const [price, setPrice] = useState(false);
  const [cuisine, setCuisine] = useState(false);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const priceValue = ["cheapest", "relevance"];
  const cuisineValue =[
    "American",
    "Italian",
  ];
  const handleSubmit = () => {
    setActive(false);
    setPrice(false);
    setCuisine(false);
    navigate("/");
  };
  // console.log(price);
  return (
    <nav className="flex flex-col md:flex-row  justify-between items-center border-b border-t border-t-black border-b-black py-6 px-8 sm:px-14  md:px-20">
      <div className=" md:flex gap-6 items-center w-full">
        <h2>Filter By: </h2>
        {/* Filter Is Open */}
        <NavLink to={"/open"} onClick={() => setActive(true) || setCuisine(false) || setPrice(false)}>
          <div className="flex items-center gap-2 text-blue-900 border-b border-b-gray-500">
            {active ? <IoMdRadioButtonOn /> : <IoMdRadioButtonOff />}
            <p>Open Now</p>
          </div>
        </NavLink>

        {/* Filter Price */}
        <div className="relative">
          <div className="text-primary border-b border-b-gray-500">
            <button
              type="button"
              className="flex items-center w-28 justify-between px-2"
              onClick={() => (price ? setPrice(false) : setPrice(true) || setCuisine(false))}
            >
              <p>Price</p>
              <span className="text-gray-500 text-xs">
                {price ? <AiOutlineUp /> : <AiOutlineDown />}
              </span>
            </button>
          </div>
          {price ? (
            <div className="absolute z-20 bg-white w-full min-h-[70px] flex flex-col justify-center border border-primary">
              {priceValue.map((i) => {
                return (
                  <NavLink key={i} to={`/filter/${i}`} onClick={() => setPrice(false) || setActive(false)} className={({isActive}) => isActive ? "text-white bg-primary px-2" : "text-primary bg-white px-2"}>
                    <p>{i}</p>
                  </NavLink>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>

        {/* Filter Cuisine */}
        <div className="relative">
          <div className="text-primary border-b border-b-gray-500">
            <button
              type="button"
              className="flex items-center w-28 justify-between px-2"
              onClick={() => (cuisine ? setCuisine(false) : setCuisine(true) || setPrice(false))}
            >
              <p>Cuisine</p>
              <span className="text-gray-500 text-xs">
                {cuisine ? <AiOutlineUp /> : <AiOutlineDown />}
              </span>
            </button>
          </div>
          {cuisine ? (
            <div className="absolute z-10 bg-white w-full min-h-[70px] flex flex-col justify-center border border-primary">
              {cuisineValue.map((i) => {
                return (
                  <NavLink key={i} to={`/cuisine/${i}`} onClick={() => setCuisine(false) || setActive(false)} className={({isActive}) => isActive ? "text-white bg-primary px-2" : "text-primary bg-white px-2"}>
                    <p>{i}</p>
                  </NavLink>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <button
          className=" text-blue-900 py-3 px-10 w-full border-2 font-medium border-blue-900 mt-4"
          onClick={handleSubmit}
        >
          CLEAR ALL
        </button>
      </div>
    </nav>
  );
};

export default Filter;
