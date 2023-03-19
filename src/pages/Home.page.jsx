import React, { useState } from "react";

// Components
import CityData from "../components/CityData";
import Navbar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

// Context
import { CityHistoryProvider } from "../context/CityHistory";

export default function HomePage() {

  return (
    <>
      <Navbar />
      <CityHistoryProvider>
        <SearchBar />
        <CityData />
      </CityHistoryProvider>
      <Footer />
    </>
  );
}
