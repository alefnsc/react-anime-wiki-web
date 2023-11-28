import { iAnime } from "./anime";

export interface iCharacter {
  id?: number;
  name: string;
  anime?: iAnime;
  animeId: number;
  age: number;
  characteristics: string;
  prefix: string;
  imageUrl: string;
}
