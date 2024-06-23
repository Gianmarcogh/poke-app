import { fetchMove } from "../api";
import { Move } from "../models";
import { mapToMove } from "./mappers/moveMapper";

export const getMove = async (id: number): Promise<Move> => {
  try {
    const response = await fetchMove(id);
    const data = await response.data;

    return mapToMove(data);
  } catch (error) { 
    console.error(error);
    throw error;
  }
}
