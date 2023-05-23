import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="mb-20 featured-items text-white bg-fixed">
      <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <SectionTitle
          heading="featured items"
          subheading="---Check it out---"
        ></SectionTitle>
        <div className="flex gap-16 mt-2">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div>
            <p className="text-2xl">March 20, 2023</p>
            <p className="uppercase text-2xl">WHERE CAN I GET SOME?</p>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
