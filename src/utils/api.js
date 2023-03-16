import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

//All Restaurants List
export const getAllRestaurants = async () => {
  const api = await axios
    .get(
      `https://api.spoonacular.com/food/restaurants/search?apiKey=${apiKey}&page=0`
    )
    .then((res) => {
      const status = res.status;
      const data = res.data.restaurants;
      return { status: status, data: data };
    })
    .catch((err) => {
      return err;
    });
  return api;
};

//Open Now List
export const getOpenRestaurants = async () => {
  const api = await axios
    .get(
      `https://api.spoonacular.com/food/restaurants/search?apiKey=${apiKey}&is-open=true`
    )
    .then((res) => {
      const status = res.status;
      const data = res.data.restaurants;
      return { status: status, data: data };
    })
    .catch((err) => {
      return err;
    });
  return api;
};

//Price List
export const getPriceList = async (setPrice) => {
  const api = await axios
    .get(
      `https://api.spoonacular.com/food/restaurants/search?apiKey=${apiKey}&sort=${setPrice}&budget=10&page=1`
    )
    .then((res) => {
      const status = res.status;
      const data = res.data.restaurants;
      return { status: status, data: data };
    })
    .catch((err) => {
      return err;
    });
  return api;
};

//Cuisine List
export const getCuisineList = async (setCuisine) => {
  const api = await axios
    .get(
      `https://api.spoonacular.com/food/restaurants/search?apiKey=${apiKey}&cuisine=${setCuisine}`
    )
    .then((res) => {
      const status = res.status;
      const data = res.data.restaurants;
      return { status: status, data: data };
    })
    .catch((err) => {
      return err;
    });
  return api;
};

// export const getDetails = async () => {
//   // const api = await axios.get(
//   //   
//   // );
//   // //   console.log({ popularList: api.data.restaurants});
//   // return api.data.restaurants;
//   const api = await axios
//     .get(
//       `https://api.spoonacular.com/food/restaurants/search?apiKey=${apiKey}&page=0`
//     )
//     .then((res) => {
//       const status = res.status;
//       const data = res.data.restaurants;
//       return { status: status, data: data };
//     })
//     .catch((err) => {
//       return err;
//     });
//   return api;
// };
