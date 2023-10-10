import axios from 'axios';

axios.defaults.headers.common["x-api-key"] = "live_FR0RyesgMGRQT1H7TTB8z01XdMsAK1sMSvCgmJxGTyOuqMsUTBVOOzS80WLnhRzz";
const BASE_URL = 'https://api.thecatapi.com/v1';
const SEARCH_URL = `https://api.thecatapi.com/v1/images/search`;

export function fetchBreeds() {
  return axios.get(`${BASE_URL}/breeds`);
}

export function fetchCatByBreed(breedId) {
  return axios.get(`${SEARCH_URL}?breed_ids=${breedId}`);
}