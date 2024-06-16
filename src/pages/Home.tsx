import React from "react";

import { Button } from "primereact/button";
import { ParticlesBg } from "../components/ParticlesBg";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const onFindPokemon = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    navigate('/pokemons');
  };

  return (
    <>
      <ParticlesBg />
      <div className="h-full flex flex-col justify-center items-center">
        <div className="z-0 flex flex-col items-center">
          <h1 className="text-7xl font-pokemon mb-5">Welcome to PokeApp!</h1>
          <Button icon="pi pi-search" className="mt-5 w-1/3" label="Find a Pokémon" severity="info" onClick={event => onFindPokemon(event)}/>
        </div>
      </div>
    </>
  );
}
