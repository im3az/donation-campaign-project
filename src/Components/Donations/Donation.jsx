const Donation = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_color,
    description,
    price,
  } = donation || {};

  return (
    <div style={{ backgroundColor: card_bg_color }} className="flex flex-col bg-white border shadow-sm rounded-xl ">
      <img
        className="w-full h-[170px] rounded-t-xl"
        src={picture}
        alt="Image Description"
      />
      <div className="p-4 md:p-5">
        <h3 style={{color:text_color}} className="text-base font-medium">{category}</h3>
        <p style={{color:text_color}} className="mt-1 text-xl font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default Donation;
