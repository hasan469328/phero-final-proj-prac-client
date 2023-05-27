import Cover from "../../Shared/Cover/Cover";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCard from "../../Shared/MenuCard/MenuCard";
import { Link } from "react-router-dom";

const CardMenu = ({ title, subTitle, heading, subheading, items, img }) => {
  return (
    <div className="mb-10">
      {title && <Cover title={title} subTitle={subTitle} img={img}></Cover>}
      {heading && (
        <SectionTitle heading={heading} subheading={subheading}></SectionTitle>
      )}
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 border-[#1F2937] block mx-auto">
          Order Your Favourite Food
        </button>
      </Link>
    </div>
  );
};

export default CardMenu;
