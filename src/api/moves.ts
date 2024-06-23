import API from "./api";

export const fetchMove = (id: number) => API.get(`move/${id}`);
