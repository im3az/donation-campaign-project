import { useLoaderData } from "react-router-dom";
import Donations from "../../Components/Donations/Donations";
import Banner from "../../Components/Header/Banner/Banner";
import { useState } from "react";

const Home = () => {
  const [searchedValue, setSearchValue] = useState("");
  const donations = useLoaderData();
  // console.log(searchedValue);

  return (
    <div>
      <Banner setSearchValue={setSearchValue}></Banner>
      <Donations
        searchedValue={searchedValue}
        donations={donations}
      ></Donations>
    </div>
  );
};

export default Home;
