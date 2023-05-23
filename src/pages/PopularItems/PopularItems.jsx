import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCard from "../Shared/MenuCard/MenuCard";


const PopularItems = () => {
  const [menu, setMenu] = useState([])
  useEffect(()=> {
    fetch('menu.json')
    .then(res => res.json())
    .then(data => {
      const popularItems = data.filter(item => item.category === 'popular')
      setMenu(popularItems)
      console.log(popularItems)
    })
  },[])
  return (
    <section className="mb-20">
      <SectionTitle heading="from our menu" subheading="---Popular Items---"></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {
          menu.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
        }
      </div>
    </section>
  );
};

export default PopularItems;