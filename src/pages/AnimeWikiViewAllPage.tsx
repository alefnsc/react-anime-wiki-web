import { useEffect, useState, SetStateAction, Dispatch } from "react";
import { useDisclosure, Spinner } from "@nextui-org/react";

import { iCharacter } from "../types/character";
import {
  deleteCharacter,
  getCharactersWithAnime,
} from "../services/apiService";

import NavbarMenu from "../components/NavbarMenu";
import CardContainer from "../components/CardContainer";
import DeleteCardModal from "../components/DeleteCardModal";
import CharacterCard from "../components/CharacterCard";
import Footer from "../components/Footer";

export default function AnimeWikiViewAllPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [allCharacters, setAllCharacters] = useState<iCharacter[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<iCharacter[]>(
    []
  );
  const [characterForDeletion, setCharacterForDeletion] = useState<
    iCharacter | undefined
  >(undefined);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);

  async function handleDeleteCharacter(characterId: number) {
    console.log("Deleting character with ID:", characterId);
    try {
      await deleteCharacter(characterId);
      setAllCharacters([]);
    } catch (error) {
      console.error("Error deleting character:", error);
    }
  }

  useEffect(() => {
    if (allCharacters.length > 0) return;
    async function getApiCharacters() {
      const response = await getCharactersWithAnime();
      const data = [...response];
      console.log(data);
      setAllCharacters(data);
      setLoading(false);
    }

    getApiCharacters();
  }, [allCharacters]);

  useEffect(() => {
    function filterCharacters() {
      return allCharacters.filter((character) => {
        for (const field in character) {
          if (typeof character[field as keyof iCharacter] === "string") {
            const fieldValue = character[field as keyof iCharacter] as string;
            if (fieldValue.toLowerCase().includes(searchValue.toLowerCase())) {
              return fieldValue
                .toLowerCase()
                .includes(searchValue.toLowerCase());
            }
          }
        }
        return false;
      });
    }
    if (searchValue !== "") {
      const filteredCharacters = filterCharacters();
      setFilteredCharacters(filteredCharacters);
    } else {
      setFilteredCharacters(allCharacters);
    }
  }, [searchValue, allCharacters]);

  const handleSetCharacterForDeletion: Dispatch<
    SetStateAction<iCharacter | undefined>
  > = (character) => {
    setCharacterForDeletion(character);
  };

  return (
    <>
      <NavbarMenu
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        search={true}
      />
      {characterForDeletion && (
        <DeleteCardModal
          isOpen={isOpen}
          onOpenChange={() => {
            onOpenChange();
            setCharacterForDeletion(undefined);
          }}
          handleDeleteCharacter={handleDeleteCharacter}
          character={characterForDeletion}
        />
      )}
      {loading && (
        <div className="flex flex-auto items-center justify-center h-full  my-10">
          <Spinner
            size="lg"
            color="secondary"
            labelColor="secondary"
            label="Loading..."
          />
        </div>
      )}
      <CardContainer>
        {!loading &&
          filteredCharacters.length > 0 &&
          filteredCharacters.map((character) => {
            return (
              <CharacterCard
                character={character}
                deletion={handleSetCharacterForDeletion}
                onOpen={onOpen}
              />
            );
          })}
      </CardContainer>
      <Footer />
    </>
  );
}
