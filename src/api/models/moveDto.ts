export interface MoveDto {
  id: number;
  name: string;
  accuracy: number;
  pp: number;
  power: number;
  type: {
    name: string;
    url: string;
  };
}