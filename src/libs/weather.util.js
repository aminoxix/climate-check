const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const WEATHER_ENDPOINT_URL = import.meta.env.VITE_WEATHER_ENDPOINT_URL;

export async function fetchWeatherByCityName (cityName) {
    const url = `${WEATHER_ENDPOINT_URL}?q=${cityName}&appid=${WEATHER_API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const latitude = data.coord.lat;
        const longitude = data.coord.lon;
        const name = data.name;
        const weather = data.weather[0].description.toUpperCase();
        const temperature = data.main.temp;
        
        return { latitude, longitude, name, weather, temperature };
    }
    catch (error) {
        console.log(error);
    }
};

export async function fetchCityByPosition (latitude, longitude) {
    const url = `${WEATHER_ENDPOINT_URL}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)

        const name = data.name;
        const weather = data.weather[0].description.toUpperCase();
        const temperature = data.main.temp;

        return { latitude, longitude, name, weather, temperature };
    }
    catch (error) {
        console.log(error);
    }
};
