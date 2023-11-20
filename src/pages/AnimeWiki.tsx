import { useEffect, useState } from "react";

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

import NavbarMenu from "../components/NavbarMenu";
import CardContainer from "../components/CardContainer";
import DeleteCardModal from "../components/DeleteCardModal";
import { getCharacters } from "../services/apiService";

export default function AnimeWiki() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [allCharacters, setAllCharacters] = useState<iCharacter[]>([]);

  interface iCharacter {
    id: string;
    name: string;
    anime: string;
    age: string;
    characteristics: string;
    photo_url: string;
  }

  function handleDeleteCharacter(characterId: string) {
    console.log("Deleting character with ID:", characterId);
    const filteredCharacters = allCharacters.filter(
      (character) => character.id !== characterId
    );
    setAllCharacters(filteredCharacters);
  }

  useEffect(() => {
    async function getApiCharacters() {
      const response = await getCharacters();
      const data = [...response];
      setAllCharacters(data);
    }
    getApiCharacters();
  }, []);

  return (
    <>
      <NavbarMenu />

      <CardContainer>
        {allCharacters.length > 0 &&
          allCharacters.map((character) => {
            return (
              <Card className="max-w-[400px] mx-4 my-10" key={character.id}>
                <DeleteCardModal
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  characterName={character.name}
                  characterId={character.id}
                  handleDeleteCharacter={handleDeleteCharacter}
                />
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
                    <Tab title="Info">
                      <CardBody>
                        <p>Anime: {character.anime}</p>
                        <p>Age: {character.age}</p>
                      </CardBody>
                    </Tab>
                    <Tab title="Characteristics">
                      <CardBody>
                        <p className="text-justify">
                          {character.characteristics}
                        </p>
                      </CardBody>
                    </Tab>
                    <Tab title="Update">
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
                          placeholder={character.characteristics}
                          className="w-full max-w-xs pt-4"
                          size="lg"
                        />
                      </CardBody>
                    </Tab>
                  </Tabs>
                  <Divider />
                  <CardBody className="flex flex-col items-center justify-center">
                    <Button
                      size="sm"
                      variant="ghost"
                      color="secondary"
                      onPress={onOpen}
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
