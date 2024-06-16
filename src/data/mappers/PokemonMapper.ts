import { PokemonDto } from "../../api/models/PokemonDto"
import { Pokemon } from "../../models/pokemon"

export const mapToPokemon = (pokemon: PokemonDto): Pokemon => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    img: pokemon.sprites.front_default,
    types: pokemon.types.map(type => {
      return {
        id: Number(type.type.url.split('/').slice(-2)[0]),
        name: type.type.name
      }
    }),
    weight: pokemon.weight/10, // Wrong weight, dividing by 10 to get the weight in KG
    height: pokemon.height/10, // Wrong height, dividing by 10 to get the height in meters
  }
}