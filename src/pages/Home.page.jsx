import React, { useState } from 'react'
import CityData from '../components/CityData';
import Navbar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import styled from 'styled-components';

export default function HomePage() {
  const [cityData, setCityData] = useState(null);

  return (
    <>
      <Navbar />
      <SearchBar 
        setCityData={setCityData}
        />
      <CityData
        cityData={cityData}
        />
      <Footer />
    </>
  )
}

