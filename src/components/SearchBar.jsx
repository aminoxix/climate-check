import React, { useState, useRef } from "react";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";

// Material UI
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import WbTwilightIcon from '@mui/icons-material/WbTwilight';

// Utils
import {
  REACT_APP_GOOGLE_API_KEY,
  fetchWeatherByCityName,
} from "../libs/weather.util";

// Styles
import styled from "styled-components";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// Context
import { useCityHistory } from "../context/CityHistory";

export default function SearchBar() {
  const { addCity } = useCityHistory();
  const [cityName, setCityName] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const placesSDK = useRef();

  const handlePlaceChanged = () => {
    const [place] = placesSDK.current.getPlaces();
    if (place) {
      setCityName(place.formatted_address);
    }
  };

  return (
    <>
      <SearchBarContainer>
        <LoadScript
          googleMapsApiKey={REACT_APP_GOOGLE_API_KEY}
          libraries={["places"]}
        >
          <StandaloneSearchBox
            onLoad={(sdk) => (placesSDK.current = sdk)}
            onPlacesChanged={handlePlaceChanged}
          >
            <SearchBarInput 
              type="text"
              value={cityName}
              onChange={(e) => setCityName(e.target.value || "")}
              placeholder="Enter city name" />
          </StandaloneSearchBox>
        </LoadScript>
        <SearchBarButton
          onClick={async (e) => {
            const data = await fetchWeatherByCityName(cityName);
            if (data === undefined) {
              return handleOpenModal();
            } else {
              addCity(data);
              setCityName("");
            }
          }}
          disabled={cityName === ""}
        >
          <LocationSearchingIcon />
        </SearchBarButton>
      </SearchBarContainer>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Err! City Not Found <WbTwilightIcon />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          (Click anywhere to close, or press ESC)
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

const style = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 360,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
  color: "#fff",
  background: "linear-gradient(to right top, #A71D31 0%, #3F0D12 100%)"
};

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
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1),
    inset 0 0 1px rgba(255, 255, 255, 0.6);
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`;

const SearchBarButton = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1),
    inset 0 0 1px rgba(255, 255, 255, 0.6);
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1),
      inset 0 0 1px rgba(255, 255, 255, 0.6);
    border-radius: 10px;
  }
`;
