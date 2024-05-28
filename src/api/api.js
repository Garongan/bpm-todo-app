import axios from "axios";
const baseUrlFromOpenWeather = import.meta.env.VITE_OPENWEATHER_BASE_URL;
const apiKeyFromOpenWeather = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const CurrentWeatherByGeo = async (lat, lon) => {
    try {
        const CurrentWeather = await axios.get(
            `${baseUrlFromOpenWeather}?lat=${lat}&lon=${lon}&lang=id&appid=${apiKeyFromOpenWeather}&units=metric`
        );
        return CurrentWeather;
    } catch (error) {
        return error;
    }
};
