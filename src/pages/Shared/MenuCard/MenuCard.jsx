
const MenuCard = ({item}) => {
  const {name, image, price, recipe} = item
  return (
    <div className="flex gap-4 mb-10">
      <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[118px] h-[104px]" src={image} alt="" />
      <div>
        <h2 className="uppercase text-[#151515] text-xl mb-2">{name}</h2>
        <p className="text-[#737373]">{recipe}</p>
      </div>
      <p className="text-[#BB8506] text-xl">${price}</p>
    </div>
  );
};

export default MenuCard;