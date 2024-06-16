import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pokemon } from "../models/pokemon";
import { getPokemonByName } from "../data/PokemonData";

export const PokemonDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const fetchPokemon = async () => {
      if (!name) return;

      const data = await getPokemonByName(name.toLowerCase());
      console.log(data);
      setPokemon(data);
    }

    fetchPokemon();
  }, [name]);

  return (
    <div>
      PokemonDetails
      <div>
        {pokemon && (
          <div>
            <img src={pokemon.img} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
          </div>
        )}
      </div>
    </div>
  );
}
