import React, { useState } from "react";
import { fetchWeatherByCityName } from "../libs/weather.util";

import styled from "styled-components";
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

export default function SearchBar(props) {
    const [cityName, setCityName] = useState("");

    return (
      <>
        <SearchBarContainer>
          <SearchBarInput
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            placeholder="Enter city name"
          />
          <SearchBarButton
            onClick={async (e) => {
              const data = await fetchWeatherByCityName(cityName);
              props.setCityData(data);
            }}
            disabled={cityName === ""}
          >
            <LocationSearchingIcon />
          </SearchBarButton>
        </SearchBarContainer>
      </>
    );
}

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;
`;

const SearchBarInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`;

const SearchBarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
    border-radius: 10px;
  }
`;