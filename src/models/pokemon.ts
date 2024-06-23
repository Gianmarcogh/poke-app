export interface Pokemon {
  id: number;
  name: string;
  img: string;
  types: {
    id: number;
    name: string;
  }[];
  weight: number;
  height: number;
  stats: PokemonStats
  moves: {
    id: number;
    name: string;
  }[];
}

export interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  specialAttack: number;
  specialDefense: number;
}
