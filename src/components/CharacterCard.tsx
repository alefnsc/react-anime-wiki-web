import {
  Card,
  CardBody,
  Image,
  CardHeader,
  Divider,
  Tabs,
  Tab,
  Button,
} from "@nextui-org/react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";

import { iCharacter } from "../types/character";

import { useNavigate } from "react-router-dom";

interface iCharacterCardProps {
  character: iCharacter;
  deletion: React.Dispatch<React.SetStateAction<iCharacter | undefined>>;
  onOpen: () => void;
}

export default function CharacterCard({
  character,
  deletion,
  onOpen,
}: iCharacterCardProps) {
  const navigate = useNavigate();

  const handleUpdateClick = (character: iCharacter) => {
    navigate(`${character.prefix}/update/`, {
      state: { character: character },
    });
  };
  function handleSetCharacterForDeletion(character: iCharacter) {
    return deletion(character);
  }

  return (
    <>
      <Card className="max-w-[400px] mx-4 my-10" key={character.id}>
        <CardHeader className="flex flex-ROW items-center justify-center">
          <p className="text-lg font-bold text-center">{character.name}</p>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col items-center justify-center">
          <Image
            className="w-60 h-60 box-border object-cover"
            alt={character.name}
            radius="sm"
            src={character.imageUrl}
          />
        </CardBody>

        <CardBody className="flex flex-col items-center justify-center">
          <Tabs color="secondary" aria-label="Tabs colors" radius="full">
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
          </Tabs>
          <Divider />
          <CardBody className="flex flex-row items-center justify-center space-x-4">
            <Button
              size="md"
              variant="ghost"
              color="secondary"
              onClick={() => handleUpdateClick(character)}
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
    </>
  );
}
