import { Route, Routes } from "react-router-dom";
import Filter from "./components/Filter";
import {AllRestaurant, Detail, Cuisine, IsOpen, Price} from "./pages";

function App() {
  return (
    <main>
      <header className=" px-8 sm:px-14 md:px-20 py-5">
        <h1 className=" font-semibold text-3xl text-primary">Restaurants</h1>
        <p className="w-full md:w-1/2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum facilis neque deserunt error voluptatem quam laboriosam sequi odit cupiditate nobis? Culpa ex voluptate praesentium tenetur repellendus magni iure nisi cumque?</p>
      </header>
      <Filter/>
      <Routes>
        <Route path="/" element={<AllRestaurant />}/>
        <Route path="/open" element={<IsOpen />}/>
        <Route path="/filter/:price" element={<Price />}/>
        <Route path="/cuisine/:type" element={<Cuisine />}/>
        <Route path="/details/:id" element={<Detail/>}/>
      </Routes>
    </main>
  );
}

export default App;
