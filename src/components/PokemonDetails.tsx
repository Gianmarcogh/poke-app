import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pokemon } from "../models/pokemon";
import { getPokemonByName } from "../data/pokemonData";
import { StatsRadar } from "./StatsRadar";
import { getMove } from "../data";
import { Move } from "../models";

export const PokemonDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const [pokemon, setPokemon] = useState<Pokemon>();
  const [moves, setMoves] = useState<Move[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      if (!name) return;

      const data = await getPokemonByName(name.toLowerCase());    
      const pokemonMoves = data.moves.sort(() => Math.random() - 0.5).slice(0, 4);
      const moves = await Promise.all(pokemonMoves.map(async move => await getMove(move.id)));

      console.log(moves);

      setPokemon(data);
      setMoves(moves);
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
            <StatsRadar stats={pokemon.stats}/>
            <h3>Moves</h3>
            {moves.map((move) => (
              <div key={move.id} className="border-2 inline-flex shadow">
                <div className="flex flex-col justify-center p-2">
                  <span>
                    {move.name}
                  </span>
                  <div>
                    { move.power && (<span> Power: {move.power}</span>)}
                    { move.accuracy && (<span className="mx-6">Acc: {move.accuracy}</span>)}
                    { move.pp && (<span>PP: {move.pp}</span>)}
                  </div>
                </div>
                <img className="m-auto p-5" src={`/images/types/${move.type.name}.png`} alt={move.type.name}></img>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

}
