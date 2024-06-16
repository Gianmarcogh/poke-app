import axios from "axios";

const BASE_URL = import.meta.env.VITE_POKE_API_URL;
const PAGE_LIMIT = 10;

const API = axios.create({
  baseURL: BASE_URL,
});

export const fetchPokemon = (offset: number = 0) => API.get(`pokemon?offset=${offset}&limit=${PAGE_LIMIT}`);

export const fetchPokemonById = (id: number) => API.get(`pokemon/${id}`);

export const fetchPokemonByName = (name: string) => API.get(`pokemon/${name}`);
