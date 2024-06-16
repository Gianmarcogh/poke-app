import { fetchPokemon, fetchPokemonById, fetchPokemonByName } from "../api/api";
import { PokemonDto } from "../api/models/PokemonDto";
import { Pokemon } from "../models/pokemon";
import { mapToPokemon } from "./mappers/PokemonMapper";

export const getPokemon = async (id: number): Promise<Pokemon> => {
  try {
    const response = await fetchPokemonById(id);
    const data = await response.data;

    return mapToPokemon(data);
  } catch (error) { 
    console.error(error);
    throw error;
  }
}

export const getPokemonByName = async (name: string): Promise<Pokemon> => {
  try {
    const response = await fetchPokemonByName(name);
    const data = await response.data;

    console.log(data);

    return mapToPokemon(data);
  } catch (error) { 
    console.error(error);
    throw error;
  }
}

const PER_PAGE = 10;

export const getPokemons = async (page: number = 0): Promise<{ totalPages: number, pokemons: Pokemon[]}> => {
  try {
    const response = await fetchPokemon(page * PER_PAGE);
    const data = await response.data.results;
    const total = await response.data.count;

    const pokemons: Pokemon[] = await Promise.all(data.map(async (pokemon: PokemonDto) => {
      const response = await fetchPokemonByName(pokemon.name);
      const data = await response.data;

      return mapToPokemon(data);
    }));

    return {
      totalPages: Math.ceil(total / PER_PAGE),
      pokemons
    };
  } catch (error) { 
    console.error(error);
    throw error;
  }
}
