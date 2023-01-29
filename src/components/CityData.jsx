import React from 'react';
import styled from 'styled-components';

const CityData = (props) => {
  // console.log(props);
  if (props.cityData === null && props.CityData === undefined) return;

  return (
    <CityDataCard>
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
  );
}

export default CityData;

const CityDataCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`;

const CityDataList = styled.li`
  list-style: none;
  margin: 10px 0;
`;

const CityDataHeader = styled.span`
  font-weight: 700;
`;
