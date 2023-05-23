import PopularItems from "../PopularItems/PopularItems";

import Banner from "./Banner/Banner";
import Category from "./Category/Category";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularItems></PopularItems>
    </div>
  );
};

export default Home;