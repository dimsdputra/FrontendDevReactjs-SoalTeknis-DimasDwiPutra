import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { getCuisineList } from "../utils/api";
import image from "../assets/bg-card2.jpg";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const [loadMore, setLoadMore] = useState(6);
  let params = useParams();

  useEffect(() => {
    const check = localStorage.getItem(params.type);
    
    if (check) {
      setCuisine(JSON.parse(check));
    } else {
      getCuisineList(params.type).then((response) => {
        localStorage.setItem(params.type, JSON.stringify(response.restaurants));
        setCuisine(response.restaurants);
      });
    }
  }, [params.type]);
  const handleLoad = () => {
    setLoadMore((prevValue) => prevValue + 6);
  };
  return (
    <section className="my-10 px-8 sm:px-14 md:px-20">
      <h2 className="text-3xl mb-10">{params.type}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cuisine.slice(0, loadMore).map((item) => {
          return (
            <div key={item._id}>
              <Card
                dollar={item.dollar_signs}
                image={
                  item.store_photos.length === 0 ? image : item.store_photos
                }
                name={item.name}
                cuisine={item.cuisines[0]}
                rating={item.weighted_rating_value}
                open={item.is_open}
                id={item._id}
              />
            </div>
          );
        })}
      </div>
      <div className=" text-center w-full mt-10">
        <button
          className="bg-white border-2 font-medium border-primary w-1/4 text-primary py-2 cursor-pointer disabled:cursor-default disabled:border-gray-500 disabled:text-gray-500"
          disabled={loadMore + 6 === cuisine.length ? true : false}
          onClick={handleLoad}
        >
          Load More
        </button>
      </div>
    </section>
  );
};

export default Cuisine;
