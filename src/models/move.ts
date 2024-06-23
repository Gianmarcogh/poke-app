export interface Move {
  id: number;
  name: string;
  accuracy: number;
  power: number;
  pp: number;
  type: {
    id: number;
    name: string;
  };
}
