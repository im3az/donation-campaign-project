const DonationPageCard = ({ donated }) => {
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
  } = donated || {};
  return (
    <div
      className="card card-side bg-base-100  w-[648px] h-[220px] flex"
      style={{ backgroundColor: card_bg_color }}
    >
      <figure>
        <img className="w-56 h-full" src={picture} alt="Movie" />
      </figure>
      <div className="card-body">
        <p
          style={{ color: text_color, backgroundColor: category_bg_color }}
          className="text-base font-medium p-1 w-24 text-center pt-2 rounded-md"
        >
          {category}
        </p>
        <p className="text-2xl font-semibold">{title}</p>
        <h2 style={{ color: text_color }} className="text-xl font-semibold">
          ${price}
        </h2>
        <div className=" justify-start">
          <button className="btn text-white" style={{ backgroundColor: text_color }}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationPageCard;
