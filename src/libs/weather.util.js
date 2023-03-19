const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const WEATHER_ENDPOINT_URL = import.meta.env.VITE_WEATHER_ENDPOINT_URL;

export const REACT_APP_GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

export async function fetchWeatherByCityName(cityName) {
  const url = `${WEATHER_ENDPOINT_URL}?q=${cityName}&appid=${WEATHER_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.coord === undefined) {
      return;
    }
    const latitude = data.coord.lat.toFixed(2);
    const longitude = data.coord.lon.toFixed(2);
    const name = data.name;
    const country = data.sys.country;
    const weather = data.weather[0].description.toUpperCase();
    const temperature = (data.main.temp - 273.15).toFixed(2);
    const img = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg`;

    return { id: cityName, latitude, longitude, name, country, weather, temperature, img };
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCityByPosition(latitude, longitude) {
  const url = `${WEATHER_ENDPOINT_URL}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    if (data.coord === undefined) {
      return;
    }
    const latitude = data.coord.lat.toFixed(2);
    const longitude = data.coord.lon.toFixed(2);
    const name = data.name;
    const country = data.sys.country;
    const weather = data.weather[0].description.toUpperCase();
    const temperature = (data.main.temp - 273.15).toFixed(2);
    const img = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg`;

    return { latitude, longitude, name, country, weather, temperature, img };
  } catch (error) {
    console.log(error);
  }
}
