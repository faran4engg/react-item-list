import { axiosInstance } from "app/axios/axios-instance";

const getCharacters = async (page = 1) =>
  await axiosInstance.get(`/character?page=${page}`);

export { getCharacters };
