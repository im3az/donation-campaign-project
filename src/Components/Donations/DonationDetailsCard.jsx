import React from "react";

const DonationDetailsCard = ({ donation }) => {
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
      <div className="relative bg-white border shadow-sm rounded-xl">
        <img
          className="w-full h-auto lg:h-[700px] rounded-xl"
          src={picture}
          alt="Image Description"
        />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="p-4 md:p-5 hero-overlay bg-black bg-opacity-50">
            <button
              className="btn border-none  text-white"
              style={{ backgroundColor: text_color }}
            >
              Donate ${price}
            </button>
          </div>
        </div>
      </div>
      <div className="py-14">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">{title}</h2>
        <p className="mt-5 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default DonationDetailsCard;
