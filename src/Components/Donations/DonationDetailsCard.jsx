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
          className="w-full h-auto lg:h-[720px] rounded-xl"
          src={picture}
          alt="Image Description"
        />
        <div className="absolute top-0 left-0 right-0">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800">Card title</h3>
            <p className="mt-1 text-gray-800">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
            <p className="mt-5 text-xs text-gray-500">
              Last updated 5 mins ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetailsCard;
