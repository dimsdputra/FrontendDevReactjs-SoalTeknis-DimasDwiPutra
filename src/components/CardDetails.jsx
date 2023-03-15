import React from "react";
import Stars from "./Stars";
import image from "../assets/bg-card2.jpg";

const CardDetails = () => {
  return (
    <div>
      <h3 className="text-3xl font-semibold text-primary mb-5">
        Restaurant Name
      </h3>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full">
          <div className="mb-5">
            <img
              className="w-full h-[350px] object-cover"
              src={image}
              alt="image_a"
            />
          </div>
          <div className="flex gap-3 items-center">
            <Stars rating={4.5} />
            <p>(58)</p>
          </div>
        </div>
        <div className="w-full">
          <p>
            <b>located at</b> Richmond, 1309 West Main Street, 23220, US.
          </p>
          <p>
            Here at Nirmanz Food Boutique, we serve cuisine such as Egg Curry,
            Vegetable Biryani, Dahi Puri, Saag Paneer, and Lamb Tikka Masala. We
            are located along Kensington Drive! Order online for carryout or
            delivery!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
