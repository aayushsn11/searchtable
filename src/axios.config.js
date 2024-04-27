import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

axiosInstance.defaults.headers.common["X-RapidAPI-Key"] =
  "e731e2d7bbmsh016b5af9e95315ep156f9ejsnff9467f4dac2";
axiosInstance.defaults.headers.common["X-RapidAPI-Host"] =
  "wft-geo-db.p.rapidapi.com";

export default axiosInstance;
