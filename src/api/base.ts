import axios from "axios";

export const stapi = axios.create({
  baseURL: import.meta.env.VITE_STAPI_BASE_URL,
  // baseURL: "https://api.themoviedb.org",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_STAPI_KEY,
  },
});
