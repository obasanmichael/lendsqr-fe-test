
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://my.api.mockaroo.com", 
  headers: {
    "X-API-Key": "c6ad28e0",
  },
});
