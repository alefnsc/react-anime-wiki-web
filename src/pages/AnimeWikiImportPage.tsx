import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  // useDisclosure,
} from "@nextui-org/react";
import NavbarMenu from "../components/NavbarMenu";
import { FiSave } from "react-icons/fi";
// import { useLocation } from "react-router-dom";
// import { iCharacter } from "../types/character";

import { useState } from "react";

import { ChangeEvent } from "react";

export default function AnimeWikiUpdatePage() {
  // const location = useLocation();
  // const [id, setId] = useState<number>();
  const [name, setName] = useState<string>("");
  const [characteristics, setCharacteristics] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [anime, setAnime] = useState<string>("");
  const [prefix, setPrefix] = useState<string>("");
  // const [release, setRelease] = useState<number>(0);
  const [director, setDirector] = useState<string>("");
  const [episodes, setEpisodes] = useState<string>("");
  const [publication, setPublication] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  // const handleIdChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const newId = parseInt(event.target.value);
  //   setId(newId);
  // };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setName(newName);
  };

  const handleCharacteristicsChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newCharacteristics = event.target.value;
    setCharacteristics(newCharacteristics);
  };

  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newAge = event.target.value;
    setAge(newAge);
  };

  const handleAnimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newAnime = event.target.value;
    setAnime(newAnime);
  };

  const handlePrefixChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPrefix = event.target.value;
    setPrefix(newPrefix);
  };

  // const handleReleaseChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const newRelease = parseInt(event.target.value);
  //   setRelease(newRelease);
  // };

  const handleDirectorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newDirector = event.target.value;
    setDirector(newDirector);
  };

  const handleEpisodesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEpisodes = event.target.value;
    setEpisodes(newEpisodes);
  };

  const handlePublicationChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPublication = event.target.value;
    setPublication(newPublication);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
  };

  return (
    <>
      <NavbarMenu search={false} />
      <Card className="sm:max-w-[300px] md:max-w-[600px] lg:max-w-[800px] m-auto mt-10">
        <CardBody className="flex items-center justify-center py-8">
          {/* <Input
            type="number"
            label="ID"
            color="secondary"
            variant="underlined"
            value={id}
            onChange={handleIdChange}
            className="max-w-xs pb-4"
            size="lg"
          /> */}

          <Input
            type="text"
            label="Name"
            color="secondary"
            variant="underlined"
            value={name}
            onChange={handleNameChange}
            className="max-w-xs pb-4"
            size="lg"
          />

          <Textarea
            variant="underlined"
            color="secondary"
            label="Characteristics"
            labelPlacement="outside"
            value={characteristics}
            onChange={handleCharacteristicsChange}
            className="w-full max-w-xs pt-4"
            size="lg"
          />

          <Input
            type="text"
            label="Age"
            color="secondary"
            variant="underlined"
            value={age}
            onChange={handleAgeChange}
            className="max-w-xs pb-4"
            size="lg"
          />

          <Input
            type="text"
            label="Anime"
            color="secondary"
            variant="underlined"
            value={anime}
            onChange={handleAnimeChange}
            className="max-w-xs pb-4"
            size="lg"
          />

          <Input
            type="text"
            label="Prefix"
            color="secondary"
            variant="underlined"
            value={prefix}
            onChange={handlePrefixChange}
            className="max-w-xs pb-4"
            size="lg"
          />

          {/* <Input
            type="number"
            label="Release"
            color="secondary"
            variant="underlined"
            value={release}
            onChange={handleReleaseChange}
            className="max-w-xs pb-4"
            size="lg"
          /> */}

          <Input
            type="text"
            label="Director"
            color="secondary"
            variant="underlined"
            value={director}
            onChange={handleDirectorChange}
            className="max-w-xs pb-4"
            size="lg"
          />

          <Input
            type="text"
            label="Episodes"
            color="secondary"
            variant="underlined"
            value={episodes}
            onChange={handleEpisodesChange}
            className="max-w-xs pb-4"
            size="lg"
          />

          <Input
            type="text"
            label="Publication"
            color="secondary"
            variant="underlined"
            value={publication}
            onChange={handlePublicationChange}
            className="max-w-xs pb-4"
            size="lg"
          />

          <Textarea
            variant="underlined"
            color="secondary"
            label="Description"
            labelPlacement="outside"
            value={description}
            onChange={handleDescriptionChange}
            className="w-full max-w-xs pt-4"
            size="lg"
          />
          <Button
            className="my-6"
            size="lg"
            color="secondary"
            onClick={() => 0}
          >
            <FiSave className="w-6 h-6" /> Save
          </Button>
        </CardBody>
      </Card>
      {/* <UpdateCardModal
        isOpen={isOpen}
        onOpenChange={onClose}
        characterName={name}
      /> */}
    </>
  );
}
