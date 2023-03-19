import React from "react";

// Style
import styled from "styled-components";
import { useCityHistory } from "../context/CityHistory";

const CityData = () => {
  const { cityHistory, removeCity } = useCityHistory();

  return (
    <FlexWrapper>
      {cityHistory.map((city) => {
        if (city === null) return;

        return (
          <FlexRowCityData key={city.id}>
            <>
              <CrossIcon className="material-symbols-outlined" onClick={() => {
                removeCity(city.id);
              }}>
                cancel
              </CrossIcon>
              <CityDataCard>
                <CityDataList>
                  <CityDataHeader>City:</CityDataHeader> {city.name} • {" "}
                  {city.country}
                </CityDataList>
                <CityDataList>
                  <CityDataHeader>Weather:</CityDataHeader> {city.weather}
                </CityDataList>
                <CityDataList>
                  <CityDataHeader>Longitude:</CityDataHeader> {city.longitude} E
                </CityDataList>
                <CityDataList>
                  <CityDataHeader>Latitude:</CityDataHeader> {city.latitude} N
                </CityDataList>
                <CityDataList>
                  <CityDataHeader>Temperature:</CityDataHeader>{" "}
                  {city.temperature}° C
                </CityDataList>
              </CityDataCard>
            </>
            <>
              <WeatherImage src={city.img} />
            </>
          </FlexRowCityData>
        );
      })}
    </FlexWrapper>
  );
};

export default CityData;

const FlexWrapper = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  max-width: 960px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const CityDataCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const CityDataList = styled.div`
  list-style: none;
  margin: 10px 0;
`;

const CityDataHeader = styled.span`
  font-weight: 700;
`;

const CrossIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 1.5rem;
`;

const FlexRowCityData = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1),
    inset 0 0 1px rgba(255, 255, 255, 0.6);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  gap: 20px;
  fill: #ffffff;
`;

const WeatherImage = styled.img`
  width: 100px;
  height: 100px;
  mix-blend-mode: soft-light;
`;
