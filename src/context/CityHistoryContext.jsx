import React, { useContext, createContext, useState } from "react";

const CityHistoryContext = createContext();

export function CityHistoryProvider(props) {
  const [cityHistory, setCityHistory] = useState([]);
  const addCity = (city) => {
    setCityHistory((history) => {
      for (let i in history) {
        // checking if city already exists
        if (history[i].id == city.id) {
          return history;
        }
      }
      return [city, ...history];
    });
  };
  const removeCity = (cityId) => {
    // removing by filter i.e, not accepting identical id
    setCityHistory((history) => history.filter((item) => item.id !== cityId));
  };

  return (
    <CityHistoryContext.Provider value={{ cityHistory, addCity, removeCity }}>
      {props.children}
    </CityHistoryContext.Provider>
  );
}

export function useCityHistory() {
  const context = useContext(CityHistoryContext);
  if (context === undefined) {
    throw new Error("useCityHistory must be used within a CityHistoryProvider");
  }
  return context;
}
