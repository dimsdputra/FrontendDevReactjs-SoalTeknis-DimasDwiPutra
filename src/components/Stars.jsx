import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Stars = (props) => {
  let text = props.rating;
  const angka = Number(text).toFixed(1);

  const rating = Array.from({ length: 5 }, (element, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {angka >= index + 1 ? (
          <FaStar />
        ) : angka >= number ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });

  // console.log(angka);
  return <div className="flex gap-2 text-primary">
    {rating}
  </div>;
};

export default Stars;
