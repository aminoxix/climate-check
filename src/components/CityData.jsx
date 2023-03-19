import React from "react";

// Style
import styled from "styled-components";
import { useCityHistory } from "../context/CityHistoryContext";
import CityInfoCard from "./CityInfoCard";

const CityData = (props) => {
  const { cityHistory } = useCityHistory();

  return (
    <FlexWrapper>
      {cityHistory.map((city) => (
        <CityInfoCard cityData={city} />
      ))}

      {props.cityData && <CityInfoCard cityData={props.cityData} />}
    </FlexWrapper>
  );
};

export default CityData;

const FlexWrapper = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
