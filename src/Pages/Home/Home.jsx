import { useLoaderData } from "react-router-dom";
import Donations from "../../Components/Donations/Donations";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {
  const donations = useLoaderData();
  // console.log(donations);
  // const total = donations.reduce(
  //   (pre, currentItem) => pre + currentItem.price,
  //   0
  // );
  // console.log(total);

  return (
    <div>
      <Banner></Banner>
      <Donations donations={donations}></Donations>
    </div>
  );
};

export default Home;
