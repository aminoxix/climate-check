import React, { useState } from "react";
import CityData from "../components/CityData";
import Navbar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

export default function HomePage() {
  const [cityData, setCityData] = useState(null);

  return (
    <>
      {cityData === undefined ? (
        <>
          <Navbar />
          <SearchBar setCityData={setCityData} />
          <Footer />
        </>
      ) : (
        <>
          <Navbar />
          <SearchBar setCityData={setCityData} />
          <CityData cityData={cityData} />
          <Footer />
        </>
      )}
    </>
  );
}
