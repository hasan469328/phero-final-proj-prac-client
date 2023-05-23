
const SectionTitle = ({heading, subheading}) => {
  return (
    <div className="mb-10 w-4/12 text-center mx-auto">
      <p className="text-[#D99904] text-xl mb-4">{subheading}</p>
      <h3 className="text-[#151515] text-4xl uppercase border-y-4 border-[#E8E8E8] py-5">{heading}</h3>
    </div>
  );
};

export default SectionTitle;