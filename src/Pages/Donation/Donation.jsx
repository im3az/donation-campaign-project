import { useEffect, useState } from "react";
import DonationPageCard from "../../Components/Donations/DonationPageCard";

const Donation = () => {
  const [donated, setDonated] = useState([]);
  const [noData, setNoData] = useState(false);
  const [isShow, setIsShow] = useState(false);
  // const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const donatedItems = JSON.parse(localStorage.getItem("donated"));

    if (donatedItems) {
      // console.log(donatedItems);
      setDonated(donatedItems);
      // const total = donatedItems.reduce(
      //   (pre, currentItem) => pre + currentItem.price,
      //   0
      // );

      // localStorage.setItem("totalDonation", JSON.stringify(donatedItems.length));
    } else {
      setNoData("No data found");
    }
  }, []);

  // console.log(donated.length);
  // console.log(isShow);

  return (
    <div>
      {noData ? (
        <p className="h-[50vh] text-xl lg:text-3xl font-semibold flex justify-center items-center">
          {noData}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-0 md:mx-16 lg:mx-0 ">
            {isShow
              ? donated.map((item) => (
                  <DonationPageCard
                    key={item.id}
                    donated={item}
                  ></DonationPageCard>
                ))
              : donated
                  .slice(0, 4)
                  .map((item) => (
                    <DonationPageCard
                      key={item.id}
                      donated={item}
                    ></DonationPageCard>
                  ))}
          </div>

          <div className={donated.length > 4 ? "block" : "hidden"}>
            <div className={isShow ? "hidden" : "block"}>
              <button
                onClick={() => setIsShow(!isShow)}
                className={`btn btn-primary block my-10 mx-auto`}
              >
                See all
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
