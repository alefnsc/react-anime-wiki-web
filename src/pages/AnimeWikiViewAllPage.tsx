import { useEffect, useState } from "react";

import {
  Card,
  CardBody,
  Image,
  CardHeader,
  Divider,
  Tabs,
  Tab,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
// import { FiSave } from "react-icons/fi";

import NavbarMenu from "../components/NavbarMenu";
import CardContainer from "../components/CardContainer";
import DeleteCardModal from "../components/DeleteCardModal";
import { deleteCharacter, getCharacters } from "../services/apiService";

import { iCharacter } from "../types/character";

export default function AnimeWikiViewAllPage() {
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
      setAllCharacters([]);
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
    if (allCharacters.length > 0) return;
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
                    className="h-full max-h-40  object-contain"
                    alt={character.name}
                    radius="sm"
                    src={`https://cdn.glitch.global/54d79ea1-4c28-497a-b9e1-670d3e73941d/${character.prefix}.jpeg`}
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
                  <CardBody className="flex flex-row items-center justify-center space-x-4">
                    <Button
                      size="md"
                      variant="ghost"
                      color="secondary"
                      onClick={() => 0}
                    >
                      <GrUpdate className="w-4 h-4" /> Update
                    </Button>
                    <Button
                      size="md"
                      variant="ghost"
                      color="danger"
                      onPress={onOpen}
                      onClick={() => handleSetCharacterForDeletion(character)}
                    >
                      <RiDeleteBin6Line className="w-4 h-4" /> Delete
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
