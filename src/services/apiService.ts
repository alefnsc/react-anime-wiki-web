import axios from "axios";

const apiUrl = "https://react-anime-wiki-api-afonseca.glitch.me/api";

export async function getCharacters() {
  const url = `${apiUrl}/?_sort=id,age`;
  const response = await axios.get(url);

  if (Array.isArray(response.data.anime_characters)) {
    return response.data.anime_characters;
  } else {
    throw new Error("Invalid response data");
  }
}
