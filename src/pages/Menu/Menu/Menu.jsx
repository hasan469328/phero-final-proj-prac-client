import { Helmet } from "react-helmet-async";
import useMenu from "../../../hooks/useMenu";
import CardMenu from "./CardMenu";
import favouriteImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <CardMenu
        title={"Our Menu"}
        subTitle={"would you like to try a dish?"}
        heading={"today's offer"}
        subheading={"---Don't Miss---"}
        items={offered}
        img={favouriteImg}
      ></CardMenu>
      <CardMenu
        title={"dessert"}
        subTitle={"would you like to try a dessert?"}
        items={dessert}
        img={dessertImg}
      ></CardMenu>
      <CardMenu
        title={"pizza"}
        subTitle={"would you like to try a pizza?"}
        items={pizza}
        img={pizzaImg}
      ></CardMenu>
      <CardMenu
        title={"salad"}
        subTitle={"would you like to try some Salad?"}
        items={salad}
        img={saladImg}
      ></CardMenu>
      <CardMenu
        title={"soup"}
        subTitle={"would you like to try some Soup?"}
        items={soup}
        img={soupImg}
      ></CardMenu>
    </div>
  );
};

export default Menu;
