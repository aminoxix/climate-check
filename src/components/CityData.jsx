import React from 'react';
import styled from 'styled-components';

const CityData = (props) => {
  // console.log(props);
  if (props.cityData === null) return;

  return (
    <FlexRowCityData>
      <>
        <CityDataCard>
          <CityDataList>
            <CityDataHeader>City:</CityDataHeader> {props.cityData.name} • {props.cityData.country}
          </CityDataList>
          <CityDataList>
            <CityDataHeader>Weather:</CityDataHeader> {props.cityData.weather}
          </CityDataList>
          <CityDataList>
            <CityDataHeader>Longitude:</CityDataHeader> {props.cityData.longitude}
          </CityDataList>
          <CityDataList>
            <CityDataHeader>Latitude:</CityDataHeader> {props.cityData.latitude}
          </CityDataList>
          <CityDataList>
            <CityDataHeader>Temperature:</CityDataHeader> {props.cityData.temperature}
          </CityDataList>
        </CityDataCard>
      </>
      <>
        <WeatherImage src={props.cityData.img} />
      </>
    </FlexRowCityData>
  );
}

export default CityData;

const CityDataCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const CityDataList = styled.li`
  list-style: none;
  margin: 10px 0;
`;

const CityDataHeader = styled.span`
  font-weight: 700;
`;

const FlexRowCityData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px 20px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
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
`;
