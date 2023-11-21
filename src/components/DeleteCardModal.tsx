import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

import { CiWarning } from "react-icons/ci";

import { iCharacter } from "../pages/AnimeWiki";
interface iCardContainerProps {
  isOpen: boolean;
  onOpenChange: () => void;
  handleDeleteCharacter: (characterId: string) => void;
  character: iCharacter;
}

export default function DeleteCardModal({
  isOpen,
  onOpenChange,
  character,
  handleDeleteCharacter,
}: iCardContainerProps) {
  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{
        backdrop:
          "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-row items-center  gap-1">
              <CiWarning className="text-red-700 w-7 h-7 space-x-6" />
              Delete {character.name}
            </ModalHeader>
            <ModalBody>
              <p>Are you sure that you want to delete this character?</p>
              <p>This action cannot be undone.</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                color="secondary"
                onPress={() => {
                  handleDeleteCharacter(character.id);
                  onOpenChange();
                }}
              >
                Delete
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
