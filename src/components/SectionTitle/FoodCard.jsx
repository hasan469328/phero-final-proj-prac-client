const FoodCard = ({item}) => {
  const {name, image, price, recipe} = item

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
        <p className="absolute px-5 py-3 rounded-md top-[51px] right-[51px] bg-[#111827] text-white font-semibold">${price}</p>
      </figure>
      
      <div className="card-body items-center text-center">
        <h2 className="text-[#151515] text-2xl font-semibold">{name}</h2>
        <p className="text-[#737373] text-left">{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline border-0 border-b-4 text-[#BB8506] text-xl font-medium uppercase hover:bg-[ #111827] hover:text-[#BB8506]">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
