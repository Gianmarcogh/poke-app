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
}
