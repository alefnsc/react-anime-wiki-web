import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { CiSquareInfo } from "react-icons/ci";
interface iUpdateCardModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  characterName: string;
}

export default function UpdateCardModal({
  isOpen,
  onOpenChange,
  characterName,
}: iUpdateCardModalProps) {
  return (
    <>
      <div className="flex flex-wrap gap-3"></div>
      <Modal backdrop={"blur"} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-row items-center  gap-1">
                <CiSquareInfo className="text-green-700 w-7 h-7  space-x-6" />
                Update {characterName}
              </ModalHeader>
              <ModalBody className="mx-4">
                <p>Character updated successfully!</p>
                <p>You can now close this modal.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
