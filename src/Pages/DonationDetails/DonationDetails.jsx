import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "../../Components/Donations/DonationDetailsCard";

const DonationDetails = () => {
  const { id } = useParams();
  const intId = parseInt(id);
  const donations = useLoaderData();

  const [donation, setDonation] = useState({});

  useEffect(() => {
    const donationDetails = donations.find((donation) => donation.id === intId);
    setDonation(donationDetails);
  }, [intId, donations]);

  console.log(donation);
  return (
    <div>
      <DonationDetailsCard donation={donation}></DonationDetailsCard>
    </div>
  );
};

export default DonationDetails;
