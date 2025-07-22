import axios from "axios";

export const axiosPunk = axios.create({
  baseURL: "https://api.punkapi.com/v2",
});
