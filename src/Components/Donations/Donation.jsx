import { Link } from "react-router-dom";

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
    <div>
      <Link to={`/donations/${id}`}>
        <div
          style={{ backgroundColor: card_bg_color }}
          className="flex flex-col bg-white border shadow-sm rounded-xl mx-5 lg:mx-0"
        >
          <img
            className="w-full h-[170px] rounded-t-xl"
            src={picture}
            alt="Image Description"
          />
          <div className="p-4 md:p-5">
            <p
              style={{ color: text_color, backgroundColor: category_bg_color }}
              className="text-base font-medium p-1 w-24 text-center rounded-md"
            >
              {category}
            </p>
            <h2
              style={{ color: text_color }}
              className="mt-1 text-xl font-semibold"
            >
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Donation;
