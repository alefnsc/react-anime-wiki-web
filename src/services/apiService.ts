import axios from "axios";
import { iCharacter } from "../types/character";
import { iAnime } from "../types/anime";

const apiUrl = "https://anime-wiki-api.onrender.com";

export async function createCharacter(character: iCharacter) {
  const url = `${apiUrl}/characters`;
  const response = await axios.post(url, character);
  return response.data;
}

export async function getCharacters() {
  const url = `${apiUrl}/characters?_sort=id,age`;
  const response = await axios.get(url);

  return response.data;
}

export async function deleteCharacter(id: number) {
  const url = `${apiUrl}/characters/${id}`;
  const response = await axios.delete(url);
  return response.data;
}

export async function updateCharacter(character: iCharacter) {
  const url = `${apiUrl}/characters/${character.id}`;
  const response = await axios({
    method: "put",
    url: url,
    data: character,
  });
  return response.data;
}

export async function getAnimes() {
  const url = `${apiUrl}/animes`;
  const response = await axios.get(url);
  return response.data;
}

export async function createAnime(anime: iAnime) {
  const url = `${apiUrl}/animes`;
  const response = await axios.post(url, anime);
  return response.data;
}

export async function getCharactersWithAnime() {
  const url = `${apiUrl}/charactersWithAnime?_sort=id,age`;
  const response = await axios.get(url);
  return response.data;
}
