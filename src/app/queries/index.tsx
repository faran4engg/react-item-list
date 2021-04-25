import { axiosInstance } from "app/axios/axios-instance";

const getCharacters = async () => await axiosInstance.get(`/character`);

export { getCharacters };
