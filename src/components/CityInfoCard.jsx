import React from "react";
import { useLocation } from "react-router-dom";

// Style
import styled from "styled-components";

// Context
import { useCityHistory } from "../context/CityHistoryContext";

const CityInfoCard = (props) => {
  const location = useLocation();
  const { removeCity } = useCityHistory();

  console.log(props.cityData.id);

  return (
    <FlexRowCityData key={props.cityData.id}>
      {location.pathname !== "/check-your-location" ? (
        <CrossIcon
          className="material-symbols-outlined"
          onClick={() => {
            removeCity(props.cityData.id);
          }}
        >
          cancel
        </CrossIcon>
      ) : null}
      <CityDataCard>
        <CityDataList>
          <CityDataHeader>City:</CityDataHeader> {props.cityData.name} •{" "}
          {props.cityData.country}
        </CityDataList>
        <CityDataList>
          <CityDataHeader>Weather:</CityDataHeader> {props.cityData.weather}
        </CityDataList>
        <CityDataList>
          <CityDataHeader>Longitude:</CityDataHeader> {props.cityData.longitude}{" "}
          E
        </CityDataList>
        <CityDataList>
          <CityDataHeader>Latitude:</CityDataHeader> {props.cityData.latitude} N
        </CityDataList>
        <CityDataList>
          <CityDataHeader>Temperature:</CityDataHeader>{" "}
          {props.cityData.temperature}° C
        </CityDataList>
      </CityDataCard>
      <>
        <WeatherImage src={props.cityData.img} />
      </>
    </FlexRowCityData>
  );
};

export default CityInfoCard;

const CrossIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
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
  font-weight: 600;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  gap: 20px;
  fill: #ffffff;
  width: 380px;
  height: 250px;
  overflow: hidden;
`;

const WeatherImage = styled.img`
  width: 100px;
  height: 100px;
  mix-blend-mode: soft-light;
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
