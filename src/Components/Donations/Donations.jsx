import { useEffect, useState } from "react";
import Donation from "./Donation";

const Donations = ({ searchedValue, donations }) => {
  // console.log(searchedValue);

  const [donationsToShow, setDonationsToShow] = useState(donations);

  // console.log(donationsToShow);

  useEffect(() => {
    if (searchedValue) {
      const show = donations.filter(
        (donation) =>
          donation.category.toLowerCase() === searchedValue.toLowerCase()
      );
      setDonationsToShow(show);
    } else {
      setDonationsToShow(donations);
    }
  }, [searchedValue, donations]);
  // console.log(donationsToShow);

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-6">
        {donationsToShow?.map((donation) => (
          <Donation key={donation.id} donation={donation}></Donation>
        ))}
      </div>
    </div>
  );
};

export default Donations;
