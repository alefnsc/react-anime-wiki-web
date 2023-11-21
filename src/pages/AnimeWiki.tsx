import { useEffect, useState, ChangeEvent } from "react";

import {
  Card,
  CardBody,
  Image,
  CardHeader,
  Divider,
  Tabs,
  Tab,
  Input,
  Textarea,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { RiDeleteBin6Line } from "react-icons/ri";
// import { FiSave } from "react-icons/fi";

import NavbarMenu from "../components/NavbarMenu";
import CardContainer from "../components/CardContainer";
import DeleteCardModal from "../components/DeleteCardModal";
import { deleteCharacter, getCharacters } from "../services/apiService";
export interface iCharacter {
  id: number;
  name: string;
  anime: string;
  age: string;
  characteristics: string;
  photo_url: string;
  release: number;
  director: string;
  episodes: string;
  publication: string;
  description: string;
}

export default function AnimeWiki() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [allCharacters, setAllCharacters] = useState<iCharacter[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<iCharacter[]>(
    []
  );
  const [characterForDeletion, setCharacterForDeletion] =
    useState<iCharacter>();
  const [searchValue, setSearchValue] = useState("");

  async function handleDeleteCharacter(characterId: number) {
    console.log("Deleting character with ID:", characterId);
    try {
      await deleteCharacter(characterId);
      const filteredCharacters = allCharacters.filter(
        (character) => character.id !== characterId
      );
      setAllCharacters(filteredCharacters);
    } catch (error) {
      console.error("Error deleting character:", error);
    }
  }

  // async function handleUpdateCharacter(characterId: number) {
  //   console.log("Updating character with ID:", characterId);
  //   try {
  //     const updatedCharacter = allCharacters.find(
  //       (character) => character.id === characterId
  //     );
  //     if (updatedCharacter) {
  //       characterUpdatedCharacteristics.map((characteristics, index) => {

  //         await updateCharacter(updatedCharacter); // Pass the updated character object to the updateCharacter function
  //       const updatedCharacters = await getCharacters();
  //       setAllCharacters(updatedCharacters);
  //     }
  //   } catch (error) {
  //     console.error("Error updating character:", error);
  //   }
  // }

  useEffect(() => {
    async function getApiCharacters() {
      const response = await getCharacters();
      const data = [...response];
      setAllCharacters(data);
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

  function handleSetCharacterForDeletion(character: iCharacter) {
    return setCharacterForDeletion(character);
  }

  return (
    <>
      <NavbarMenu searchValue={searchValue} setSearchValue={setSearchValue} />
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
      <CardContainer>
        {filteredCharacters.length > 0 &&
          filteredCharacters.map((character) => {
            return (
              <Card className="max-w-[400px] mx-4 my-10" key={character.id}>
                <CardHeader className="flex flex-ROW items-center justify-center">
                  <p className="text-lg font-bold text-center">
                    {character.name}
                  </p>
                </CardHeader>
                <Divider />
                <CardBody className="flex flex-col items-center justify-center">
                  {" "}
                  <Image
                    alt={character.name}
                    height={150}
                    radius="sm"
                    src={`https://cdn.glitch.global/54d79ea1-4c28-497a-b9e1-670d3e73941d/${character.photo_url}`}
                    width={150}
                  />
                </CardBody>

                <CardBody className="flex flex-col items-center justify-center">
                  <Tabs
                    color="secondary"
                    aria-label="Tabs colors"
                    radius="full"
                  >
                    <Tab title="Anime">
                      <CardBody>
                        <div className="flex flex-col space-y-2">
                          <div className="flex">
                            <b className="w-1/3">Anime:</b>
                            <p className="w-2/3">{character.anime}</p>
                          </div>
                          <div className="flex">
                            <b className="w-1/3">Director:</b>
                            <p className="w-2/3">{character.director}</p>
                          </div>
                          <div className="flex">
                            <b className="w-1/3">Release:</b>
                            <p className="w-2/3">{character.release}</p>
                          </div>
                          <div className="flex">
                            <b className="w-1/3">Episodes:</b>
                            <p className="w-2/3">{character.episodes}</p>
                          </div>
                          <div className="flex">
                            <b className="w-1/3">Publication:</b>
                            <p className="w-2/3">{character.publication}</p>
                          </div>
                          <div className="flex">
                            <b className="w-1/3">Description:</b>
                            <p className="w-2/3 text-justify">
                              {character.description}
                            </p>
                          </div>
                        </div>
                        {/* <div className="flex flex-col">
                          <b className="my-2">Description:</b>
                          <p className=" text-justify">
                            {character.description}
                          </p>
                        </div> */}
                      </CardBody>
                    </Tab>
                    <Tab title="Character">
                      <CardBody>
                        <div className="flex flex-col space-y-2">
                          <div className="flex">
                            <b className="w-1/3">Age:</b>
                            <p className="w-2/3">{character.age}</p>
                          </div>
                          <div className="flex">
                            <b className="w-1/3">Description:</b>
                            <p className="w-2/3 text-justify">
                              {character.characteristics}
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Tab>
                    {/* <Tab title="Update">
                      <CardBody>
                        <Input
                          type="text"
                          label="Age"
                          color="secondary"
                          variant="underlined"
                          defaultValue={character.age}
                          className="max-w-xs pb-4"
                          size="lg"
                        />
                        <Textarea
                          variant="underlined"
                          color="secondary"
                          label="Characteristics"
                          labelPlacement="outside"
                          value={character.characteristics}
                          onChange={(event) =>
                            handleCharacteristicsChange(event, index)
                          }
                          className="w-full max-w-xs pt-4"
                          size="lg"
                        />
                        <Button
                          className="my-6"
                          size="sm"
                          color="secondary"
                          onClick={() => handleUpdateCharacter(character.id)}
                        >
                          <FiSave className="w-6 h-6" />
                        </Button>
                      </CardBody>
                    </Tab> */}
                  </Tabs>
                  <Divider />
                  <CardBody className="flex flex-col items-center justify-center">
                    <Button
                      size="sm"
                      variant="ghost"
                      color="secondary"
                      onPress={onOpen}
                      onClick={() => handleSetCharacterForDeletion(character)}
                    >
                      <RiDeleteBin6Line className="w-6 h-6" />
                    </Button>
                  </CardBody>
                </CardBody>
              </Card>
            );
          })}
      </CardContainer>
    </>
  );
}
