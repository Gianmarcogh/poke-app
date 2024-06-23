import { PokemonDto } from "../../api/models/pokemonDto"
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
    stats: {
      hp: pokemon.stats[0].base_stat,
      attack: pokemon.stats[1].base_stat,
      defense: pokemon.stats[2].base_stat,
      specialAttack: pokemon.stats[3].base_stat,
      specialDefense: pokemon.stats[4].base_stat,
      speed: pokemon.stats[5].base_stat,
    },
    moves: pokemon.moves.map(({move}) => {
      return {
        id: Number(move.url.split('/').slice(-2)[0]),
        name: move.name
      }
    })
  }
}
