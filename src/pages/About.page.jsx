import React, { useState, useEffect } from "react";
import { fetchCityByPosition } from "../libs/weather.util";
import CityData from "../components/CityData";
import Footer from "../components/Footer";

import styled from "styled-components";

export default function AboutPage() {
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      fetchCityByPosition(data.coords.latitude, data.coords.longitude).then(
        setCityData
      );
      // console.log(data);
    }, console.error);
  }, []);

  return (
    <>
      {cityData ? (
        <CityData cityData={cityData} />
      ) : (
        <AboutCard>
          You need to allow location access to see your current location.
        </AboutCard>
      )}
      <Footer />
    </>
  );
}

const AboutCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1),
    inset 0 0 1px rgba(255, 255, 255, 0.6);
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`;
