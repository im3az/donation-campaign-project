import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";

const MainLayout = () => {
  const donations = useLoaderData();
  // console.log(donations);
  // const total = donations.reduce(
  //   (pre, currentItem) => pre + currentItem.price,
  //   0
  // );
  // console.log(total);

  localStorage.setItem("totalDonation", JSON.stringify(donations.length));
  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar></Navbar>
      <div className="py-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
