import axios from "axios";
import { iCharacter } from "../types/character";

const apiUrl = "http://localhost:3001/anime_characters";

export async function createCharacter(character: iCharacter) {
  const response = await axios.post(apiUrl, character);
  return response.data;
}

export async function getCharacters() {
  const url = `${apiUrl}/?_sort=id,age`;
  const response = await axios.get(url);

  return response.data;
}

export async function deleteCharacter(id: number) {
  const url = `${apiUrl}/${id}`;
  const response = await axios.delete(url);
  return response.data;
}

export async function updateCharacter(character: iCharacter) {
  const url = `${apiUrl}/${character.id}`;
  const response = await axios({
    method: "put",
    url: url,
    data: character,
  });
  console.log(response);
  return response.data;
}
