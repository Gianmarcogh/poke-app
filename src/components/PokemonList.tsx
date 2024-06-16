import React, { useState, useEffect } from "react";
import { getPokemons } from "../data/PokemonData";
import { Pokemon } from "../models/pokemon";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

interface PokemonListProps {
  page: number;
  onPageChange: (page: number) => void;
}

export const PokemonList: React.FC<PokemonListProps> = ({ page, onPageChange }) => {
  const navigate = useNavigate();

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [cache] = useState(new Map<number, Pokemon[]>());
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(page);

  useEffect(() => {
    const fetchPokemons = async () => {
      if (cache.has(currentPage)) {
        setPokemons(cache.get(currentPage)!);
        
        return;
      }

      const data = await getPokemons(currentPage);
      cache.set(currentPage, data.pokemons);
      
      setTotalPages(data.totalPages);
      setPokemons(data.pokemons);
    }

    fetchPokemons();
  }, [currentPage, cache]);

  const onPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      onPageChange(currentPage - 1);
    }
  };

  const onNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      onPageChange(currentPage + 1);
    }
  };

  const onPokemonDetails = (event: React.MouseEvent, name: string) => {
    event.preventDefault();

    navigate(`/pokemon/${name}`);
  }

  return (
    <>
    <div>
      <table className="table-auto min-w-full text-center text-sm font-light text-surface dark:text-white">
        <thead className="border-b border-neutral-200 bg-neutral-50 font-medium dark:border-white/10 dark:text-neutral-800">
          <tr>
            <th scope="col" className=" px-6 py-4">Number</th>
            <th scope="col" className=" px-6 py-4">Name</th>
            <th scope="col" className=" px-6 py-4">Image</th>
            <th scope="col" className=" px-6 py-4">Type</th>
            <th scope="col" className=" px-6 py-4">Weight(kg)</th>
            <th scope="col" className=" px-6 py-4">Height(m)</th>
            <th scope="col" className=" px-6 py-4">Details</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon) => (
            <tr key={pokemon.id} className="border-b border-neutral-200 dark:border-white/10">
              <td className="whitespace-nowrap px-4 font-medium">{pokemon.id}</td>
              <td className="whitespace-nowrap px-4">{pokemon.name}</td>
              <td className="whitespace-nowrap px-4">
                <img className="m-auto h-[85px]" src={pokemon.img} alt={pokemon.name} />
              </td>
              <td>
                {pokemon.types.map((type) => (
                  <img key={type.id} className="m-auto" src={`/images/types/${type.name}.png`} alt={type.name}></img>
                ))}
              </td>
              <td className="whitespace-nowrap px-4">{pokemon.weight}</td>
              <td className="whitespace-nowrap px-4">{pokemon.height}</td>
              <td className="whitespace-nowrap px-4">
                <Button label="Details" severity="info" size="small" onClick={event => onPokemonDetails(event, pokemon.name)}/>
              </td>
            </tr>
          ))}
          { pokemons.length === 0 && (
            <tr>
              <td colSpan={3} className="text-4xl text-center p-5">No pokemons found</td>
            </tr>  
          )}
        </tbody>
      </table>
      <div className="flex justify-center mt-3">
        <button className="font-bold" onClick={onPreviousPage} disabled={currentPage === 0}>
          <i className="pi pi-arrow-left"></i>
        </button>
        <span className="text-4xl mx-2">{currentPage + 1}</span>
        <button className="font-bold" onClick={onNextPage} disabled={currentPage === totalPages}>
          <i className="pi pi-arrow-right"></i>
        </button>
      </div>
    </div>
    </>  
  );
}
