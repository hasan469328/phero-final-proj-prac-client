import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCard from "../../Shared/MenuCard/MenuCard";



const PopularItems = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item?.category === "popular");
  return (
    <section className="mb-20">
      <SectionTitle
        heading="from our menu"
        subheading="---Popular Items---"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {popularItems.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 border-[#1F2937] block mx-auto">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularItems;
