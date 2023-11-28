import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  Image,
  Chip,
} from "@nextui-org/react";
import { FiSave } from "react-icons/fi";
import { iCharacter } from "../types/character";
import { updateCharacter } from "../services/apiService";
import { useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface iUpdateFormProps {
  character: iCharacter;
  onOpen: () => void;
  onCharacterName: (name: string) => void;
}

export default function UpdateForm({
  character,
  onOpen,
  onCharacterName,
}: iUpdateFormProps) {
  const navigate = useNavigate();
  const [name, setName] = useState(character.name);
  const [prefix, setPrefix] = useState(character.prefix);
  const [age, setAge] = useState(character.age);
  const [characteristics, setCharacteristics] = useState(
    character.characteristics
  );

  async function handleSaveCharacter(character: iCharacter) {
    try {
      const { id, name, animeId, age, characteristics, prefix, imageUrl } =
        character;
      await updateCharacter({
        id,
        name,
        animeId,
        age,
        characteristics,
        prefix,
        imageUrl,
      });
      onCharacterName(character.name);
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
    setAge(Number(event.target.value));
  }

  function handleSetCharacteristcs(event: React.ChangeEvent<HTMLInputElement>) {
    setCharacteristics(event.target.value);
  }

  return (
    <>
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
            className="w-60 h-60 box-border object-cover my-4"
            alt={character.name}
            radius="sm"
            src={character.imageUrl}
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
            type="number"
            label="Age"
            color="secondary"
            variant="underlined"
            value={age.toString()}
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
              } as iCharacter)
            }
          >
            <FiSave className="w-6 h-6" /> Save
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
