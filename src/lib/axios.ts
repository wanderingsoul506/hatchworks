import axios from "axios";

export const axiosStore = axios.create({
  baseURL: "https://fakestoreapi.com",
});
