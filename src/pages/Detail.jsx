import React from "react";
// import { useParams } from "react-router-dom";
import CardDetails from "../components/CardDetails";
// import { getDetails } from "../utils/api";

const Detail = () => {
//   const params = useParams();
//   const [details, setDetails] = useState([]);
  // const [activeTab, setActiveTab] = useState("summary");

//   useEffect(() => {
//     const check = localStorage.getItem("details");

//     if (check) {
//       setDetails(JSON.parse(check));
//     } else {
//       getDetails().then((recipes) => {
//         localStorage.setItem("details", JSON.stringify(recipes));
//         setDetails(recipes);
        // console.log(recipes);
    //   });
    // }
    // getDetails();
//   }, []);
//   console.log(details);
//   const di = (dat) => {
//     return dat._id === params.id;
//   };
//   const item = details.find(di);
  //   console.log(details.find(di).is_open);
  console.log(alert("I apologize for not being able to display the detail page, because the API I got doesn't provide restaurant details"))
  return (
    <section className="my-10 px-8 sm:px-14 md:px-20">
      <h2 className="text-3xl mb-10">Detail Page</h2>
      <CardDetails />
    </section>
  );
};

export default Detail;
