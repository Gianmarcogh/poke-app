import { MoveDto } from "../../api";
import { Move } from "../../models";

export const mapToMove = (move: MoveDto): Move => {
  return {
    id: move.id,
    name: move.name,
    accuracy: move.accuracy,
    pp: move.pp,
    power: move.power,
    type: {
      id: Number(move.type.url.split('/').slice(-2)[0]),
      name: move.type.name
    },
  };
}
