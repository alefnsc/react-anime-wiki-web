import { useState } from "react";

import { useDisclosure } from "@nextui-org/react";
import NavbarMenuUI from "../components/NavbarMenuUI";
import { useLocation } from "react-router-dom";
import { iCharacter } from "../types/character";

import InfoCardModal from "../components/InfoCardModal";
import Footer from "../components/Footer";
import UpdateForm from "../components/UpdateForm";

export default function AnimeWikiUpdatePage() {
  const location = useLocation();
  const character = location.state?.character as iCharacter;
  const [name, setName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCharacterName = (name: string) => {
    setName(name);
  };
  return (
    <>
      <NavbarMenuUI search={false} />
      <UpdateForm
        onOpen={onOpen}
        character={character}
        onCharacterName={handleCharacterName}
      />
      <InfoCardModal
        isOpen={isOpen}
        onOpenChange={onClose}
        characterName={name}
        isEditing={true}
      />
      <Footer />
    </>
  );
}
