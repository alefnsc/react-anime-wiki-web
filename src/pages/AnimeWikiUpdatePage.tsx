import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  Image,
  Chip,
  useDisclosure,
} from "@nextui-org/react";
import NavbarMenu from "../components/NavbarMenu";
import { FiSave } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { iCharacter } from "../types/character";
import { updateCharacter } from "../services/apiService";
import { useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import InfoCardModal from "../components/InfoCardModal";

export default function AnimeWikiUpdatePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const character = location.state?.character as iCharacter;
  const [name, setName] = useState(character.name);
  const [prefix, setPrefix] = useState(character.prefix);
  const [age, setAge] = useState(character.age);
  const [characteristics, setCharacteristics] = useState(
    character.characteristics
  );
  const [description, setDescription] = useState(character.description);
  const { isOpen, onOpen, onClose } = useDisclosure();

  async function handleSaveCharacter(character: iCharacter) {
    try {
      await updateCharacter(character);
      return onOpen();
    } catch (error) {
      console.error("Error saving character:", error);
    }
  }

  function handleSetName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleSetPrefix(event: React.ChangeEvent<HTMLInputElement>) {
    setPrefix(event.target.value);
  }

  function handleSetAge(event: React.ChangeEvent<HTMLInputElement>) {
    setAge(event.target.value);
  }

  function handleSetCharacteristcs(event: React.ChangeEvent<HTMLInputElement>) {
    setCharacteristics(event.target.value);
  }

  function handleSetDescription(event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  return (
    <>
      <NavbarMenu search={false} />
      <Card className="sm:max-w-[300px] md:max-w-[600px] lg:max-w-[800px] m-auto mt-10">
        <div className="float-left align-left justify-start items-start p-8  opacity-75 hover:opacity-100">
          <Chip
            className="cursor-pointer"
            startContent={<FaAngleDoubleLeft />}
            variant="flat"
            size="lg"
            color="secondary"
            onClick={() => navigate("/characters")}
          >
            Back
          </Chip>
        </div>
        <CardBody className="flex items-center justify-center py-8">
          <Image
            className="h-full max-h-60  object-contain my-4"
            alt={character.name}
            radius="sm"
            src={`https://cdn.glitch.global/54d79ea1-4c28-497a-b9e1-670d3e73941d/${character.prefix}.jpeg`}
          />
          <Input
            value={name}
            onChange={handleSetName}
            type="text"
            label="Name"
            color="secondary"
            variant="underlined"
            className="max-w-xs pb-4"
            size="lg"
          />

          <Input
            type="text"
            label="Prefix"
            color="secondary"
            variant="underlined"
            value={prefix}
            onChange={handleSetPrefix}
            className="max-w-xs pb-4"
            size="lg"
          />

          <Input
            type="text"
            label="Age"
            color="secondary"
            variant="underlined"
            value={age}
            onChange={handleSetAge}
            className="max-w-xs pb-4"
            size="lg"
          />
          <Textarea
            variant="underlined"
            color="secondary"
            label="Characteristics"
            labelPlacement="outside"
            value={characteristics}
            onChange={handleSetCharacteristcs}
            className="w-full max-w-xs pt-4"
            size="lg"
          />
          <Textarea
            variant="underlined"
            color="secondary"
            label="Description"
            labelPlacement="outside"
            value={description}
            onChange={handleSetDescription}
            className="w-full max-w-xs pt-4"
            size="lg"
          />

          <Button
            className="my-6"
            size="lg"
            color="secondary"
            onClick={() =>
              handleSaveCharacter({
                ...character,
                name,
                prefix,
                age,
                characteristics,
                description,
              } as iCharacter)
            }
          >
            <FiSave className="w-6 h-6" /> Save
          </Button>
        </CardBody>
      </Card>
      <InfoCardModal
        isOpen={isOpen}
        onOpenChange={onClose}
        characterName={name}
      />
    </>
  );
}
