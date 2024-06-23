import API from "./api";

const PAGE_LIMIT = 10;

export const fetchPokemons = (offset: number = 0) => API.get(`pokemon?offset=${offset}&limit=${PAGE_LIMIT}`);

export const fetchPokemon = (id: number) => API.get(`pokemon/${id}`);

export const fetchPokemonByName = (name: string) => API.get(`pokemon/${name}`);
