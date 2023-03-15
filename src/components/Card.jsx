import React from "react";
import Stars from "./Stars";
import { BiDollar } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import { Link } from "react-router-dom";

const Card = (props) => {
  //Price Looping
  let str = "";
  let length = props.dollar;

  for (let i = 1; i < length + 1; i++) {
    str = str + i;
  }
  let arr = Array.from(str);
  return (
      <div className="flex flex-col justify-between gap-3">
        <div>
          <img
            className="w-full h-[250px] object-cover"
            src={props.image}
            alt="image_a"
          />
        </div>
        <h4 className="text-start text-lg font-normal">{props.name}</h4>
        <Stars rating={props.rating}/>
        <div className="flex justify-between items-center text-xs">
          <div className="flex gap-2 items-center">
            <p>{props.cuisine}</p>
            <div className="flex">
              {arr.map((i) => {
                return (
                  <div key={i}>
                    <BiDollar />
                  </div>
                );
              })}
            </div>
          </div>
          {props.open ? (
            <div className="flex items-center">
              <GoPrimitiveDot className=" text-green-500" />
              <span>OPEN NOW</span>
            </div>
          ) : (
            <div className="flex items-center">
              <GoPrimitiveDot className=" text-red-500" />
              <span>Closed</span>
            </div>
          )}
        </div>
        <Link to={"/details/" + props.id}>
          <div className=" bg-primary text-center">
            <button className="text-white py-2 w-full">Recipe</button>
          </div>
        </Link>
      </div>
  );
};

export default Card;
