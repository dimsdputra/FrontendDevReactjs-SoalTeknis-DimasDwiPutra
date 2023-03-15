import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { getOpenRestaurants } from '../utils/api';
import image from "../assets/bg-card2.jpg"

const IsOpen = () => {
  const [open, setOpen] = useState([]);
  const [loadMore, setLoadMore] = useState(6);

  useEffect(() => {
    const check = localStorage.getItem("open");

    if (check) {
      setOpen(JSON.parse(check));
    } else {
      getOpenRestaurants().then((recipes) => {
        localStorage.setItem("open", JSON.stringify(recipes));
        setOpen(recipes);
      });
    }
  }, []);
  const handleLoad = () => {
    setLoadMore((prevValue) => prevValue + 6);
  };
  return (
    <section className="my-10 px-8 sm:px-14 md:px-20">
      <h2 className="text-3xl mb-10">Open Now</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {open.slice(0, loadMore).map((item) => {
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
          disabled={loadMore + 6 === open.length ? true : false}
          onClick={handleLoad}
        >
          Load More
        </button>
      </div>
    </section>
  )
}

export default IsOpen