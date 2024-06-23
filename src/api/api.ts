import axios from "axios";

const BASE_URL = import.meta.env.VITE_POKE_API_URL;

const API = axios.create({
  baseURL: BASE_URL,
});

export default API;
