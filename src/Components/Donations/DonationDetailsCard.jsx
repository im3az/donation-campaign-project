import React from "react";
import swal from "sweetalert";

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

  const handleAddToDonate = () => {
    const addedDonatedArray = [];

    const donatedItems = JSON.parse(localStorage.getItem("donated"));

    if (!donatedItems) {
      addedDonatedArray.push(donation);
      localStorage.setItem("donated", JSON.stringify(addedDonatedArray));
      swal("Thank you!", "Donation added!", "success");
    } else {
      const isExists = donatedItems.find((item) => item.id === id);

      if (!isExists) {
        addedDonatedArray.push(...donatedItems, donation);
        localStorage.setItem("donated", JSON.stringify(addedDonatedArray));
        swal("Thank you!", "Donation added!", "success");
      } else {
        swal("Sorry!", "Donation already added!", "error");
      }
    }
    // console.log(addedDonatedArray.length);
    localStorage.setItem(
      "donationGiven",
      JSON.stringify(addedDonatedArray.length)
    );
  };

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
              onClick={handleAddToDonate}
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
