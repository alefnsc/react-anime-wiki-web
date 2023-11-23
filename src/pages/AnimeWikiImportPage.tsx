import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  // Chip,
  useDisclosure,
} from "@nextui-org/react";
import NavbarMenu from "../components/NavbarMenu";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FiSave } from "react-icons/fi";

import { createCharacter } from "../services/apiService";
import InfoCardModal from "../components/InfoCardModal";
// import { useLocation } from "react-router-dom";
import { iCharacter } from "../types/character";

import { useState } from "react";

import { ChangeEvent } from "react";

export default function AnimeWikiUpdatePage() {
  // const location = useLocation();
  const [name, setName] = useState<string>("");
  const [characteristics, setCharacteristics] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [anime, setAnime] = useState<string>("");
  const [prefix, setPrefix] = useState<string>("");
  const [release, setRelease] = useState<number>(0);
  const [director, setDirector] = useState<string>("");
  const [episodes, setEpisodes] = useState<string>("");
  const [publication, setPublication] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const notify = (field: string) =>
    toast.error(`${field} field is required!fieldUpper`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      theme: "light",
    });

  async function handleSaveCharacter(character: iCharacter) {
    try {
      const missingFields = Object.keys(character).filter(
        (key) => character[key as keyof iCharacter] === ""
      );
      if (missingFields.length > 0) {
        const fieldUpper =
          missingFields[0].charAt(0).toUpperCase() + missingFields[0].slice(1);
        notify(fieldUpper);
        return;
      } else {
        await createCharacter(character);
        return onOpen();
      }
    } catch (error) {
      // Handle the error
    }
  }

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

  const handleReleaseChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newRelease = parseInt(event.target.value);

    setRelease(newRelease);
  };

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
          <Input
            type="text"
            label="Name"
            color="secondary"
            variant="underlined"
            value={name}
            onChange={handleNameChange}
            className="max-w-xs pb-4"
            size="lg"
            required
          />
          <Input
            type="file"
            label="Image"
            color="secondary"
            variant="underlined"
            className="max-w-xs pb-4"
            size="lg"
            required
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
            required
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
            required
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
            required
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
            required
          />

          <Input
            type="number"
            label="Release"
            color="secondary"
            variant="underlined"
            value={release.toString()}
            onChange={handleReleaseChange}
            className="max-w-xs pb-4"
            size="lg"
            required
          />

          <Input
            type="text"
            label="Director"
            color="secondary"
            variant="underlined"
            value={director}
            onChange={handleDirectorChange}
            className="max-w-xs pb-4"
            size="lg"
            required
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
            required
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
            required
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
            required
          />
          <Button
            className="my-6"
            size="lg"
            color="secondary"
            onClick={() =>
              handleSaveCharacter({
                name,
                characteristics,
                age,
                anime,
                prefix,
                release,
                director,
                episodes,
                publication,
                description,
              })
            }
          >
            <FiSave className="w-6 h-6" /> Save
          </Button>
        </CardBody>
      </Card>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <InfoCardModal
        isOpen={isOpen}
        onOpenChange={onClose}
        characterName={name}
        isEditing={false}
      />
    </>
  );
}
