import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

//All Restaurants List
export const getAllRestaurants = async () => {
    const api = await axios.get(
        `https://api.spoonacular.com/food/restaurants/search?apiKey=${apiKey}&page=0`
      );
    //   console.log({ popularList: api.data.restaurants});
      return api.data.restaurants;
  };

//Open Now List
export const getOpenRestaurants = async () => {
    const api = await axios.get(
        `https://api.spoonacular.com/food/restaurants/search?apiKey=${apiKey}&is-open=true`
      );
    //   console.log({ popularList: api.data.restaurants});
      return api.data.restaurants;
  };

//Price List
export const getPriceList = async (setPrice) => {
    const api = await axios.get(
        `https://api.spoonacular.com/food/restaurants/search?apiKey=${apiKey}&sort=${setPrice}&budget=10&page=1`
      );
    //   console.log({ popularList: api.data.restaurants});
      return api.data.restaurants;
  };

//Cuisine List
export const getCuisineList = async (setCuisine) => {
    const api = await axios.get(
      `https://api.spoonacular.com/food/restaurants/search?apiKey=${apiKey}&cuisine=${setCuisine}`
    );
    // console.log({ popularList: api.data });
    return api.data;
  };

  export const getDetails = async () => {
    const api = await axios.get(
        `https://api.spoonacular.com/food/restaurants/search?apiKey=${apiKey}&page=0`
      );
    //   console.log({ popularList: api.data.restaurants});
      return api.data.restaurants;
  };