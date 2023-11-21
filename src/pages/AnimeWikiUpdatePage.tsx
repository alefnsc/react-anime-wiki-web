import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  Image,
} from "@nextui-org/react";
import NavbarMenu from "../components/NavbarMenu";
import { FiSave } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { iCharacter } from "../types/character";
interface iAnimeWikiUpdatePageProps {
  prefix?: string;
}

export default function AnimeWikiUpdatePage() {
  const location = useLocation().pathname.split("/")[2];
  console.log(location);
  return (
    <>
      <NavbarMenu search={false} />
      <Card className="sm:max-w-[400px] md:max-w-[800px] lg:max-w-[1200px] m-auto mt-10">
        <CardBody className="flex items-center justify-center py-8">
          <Image
            className="h-full max-h-40  object-contain"
            alt="{character.name}"
            radius="sm"
            src={`https://cdn.glitch.global/54d79ea1-4c28-497a-b9e1-670d3e73941d/${location}.jpeg`}
          />
          <Input
            type="text"
            label="Name"
            color="secondary"
            variant="underlined"
            defaultValue={"character.name"}
            className="max-w-xs pb-4"
            size="lg"
          />

          <Input
            type="text"
            label="Prefix"
            color="secondary"
            variant="underlined"
            defaultValue={"character.prefix"}
            className="max-w-xs pb-4"
            size="lg"
          />

          <Input
            type="text"
            label="Age"
            color="secondary"
            variant="underlined"
            defaultValue={"character.age"}
            className="max-w-xs pb-4"
            size="lg"
          />
          <Textarea
            variant="underlined"
            color="secondary"
            label="Characteristics"
            labelPlacement="outside"
            value={"character.characteristics"}
            className="w-full max-w-xs pt-4"
            size="lg"
          />
          <Textarea
            variant="underlined"
            color="secondary"
            label="Description"
            labelPlacement="outside"
            value={"character.description"}
            className="w-full max-w-xs pt-4"
            size="lg"
          />

          <Button className="my-6" size="sm" color="secondary">
            <FiSave className="w-6 h-6" />
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
