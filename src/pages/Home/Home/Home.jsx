import { Helmet } from "react-helmet-async";

import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import PopularItems from "../PopularItems/PopularItems";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularItems></PopularItems>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
