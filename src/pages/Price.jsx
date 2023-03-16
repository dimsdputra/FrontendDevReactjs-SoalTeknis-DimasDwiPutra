import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { getPriceList } from "../utils/api";
import image from "../assets/bg-card2.jpg";
import { AiOutlineLoading } from "react-icons/ai";

const Price = () => {
  const [price, setPrice] = useState([]);
  const [loadMore, setLoadMore] = useState(6);
  const [loading, setLoading] = useState(false);
  let params = useParams();

  useEffect(() => {
    const check = localStorage.getItem(params.price);
    setLoading(true);
    if (check) {
      setPrice(JSON.parse(check));
      setLoading(false);
    } else {
      getPriceList(params.price).then((recipes) => {
        if (recipes.status === 200) {
          localStorage.setItem(params.price, JSON.stringify(recipes.data));
          setPrice(recipes.data);
          setLoading(false);
        }
      });
    }
  }, [params.price]);
  const handleLoad = () => {
    setLoadMore((prevValue) => prevValue + 6);
  };
  return (
    <section className="mt-10 px-8 sm:px-14 md:px-20">
      {loading ? (
        <AiOutlineLoading className="text-5xl md:text-7xl mb-5 mx-auto animate-spin" />
      ) : (
        ""
      )}
      <h2 className="text-3xl mb-10">Price {params.price}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {price.slice(0, loadMore).map((item) => {
          return (
            <div key={item._id}>
              <Card
                dollar={item.dollar_signs}
                image={item.food_photos.length === 0 ? image : item.food_photos}
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
          disabled={loadMore + 6 === price.length ? true : false}
          onClick={handleLoad}
        >
          Load More
        </button>
      </div>
    </section>
  );
};

export default Price;
