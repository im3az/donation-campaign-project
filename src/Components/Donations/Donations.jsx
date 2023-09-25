import Donation from "./Donation";

const Donations = ({ donations }) => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-6">
        {donations?.map((donation) => (
          <Donation key={donation.id} donation={donation}></Donation>
        ))}
      </div>
    </div>
  );
};

export default Donations;
