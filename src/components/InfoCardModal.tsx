import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { CiSquareInfo } from "react-icons/ci";

import { useNavigate } from "react-router-dom";

interface iInfoCardModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  characterName: string;
  isEditing?: boolean;
}

export default function InfoCardModal({
  isOpen,
  onOpenChange,
  characterName,
  isEditing,
}: iInfoCardModalProps) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-wrap gap-3"></div>
      <Modal backdrop={"blur"} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-row items-center  gap-1">
                <CiSquareInfo className="text-green-700 w-7 h-7  space-x-6" />
                {isEditing ? "Update" : "Create"} {characterName}
              </ModalHeader>
              <ModalBody className="mx-4">
                <p>
                  Character {isEditing ? "updated" : "created"} successfully!
                </p>
                <p>You can now close this modal.</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="secondary"
                  onPress={() => {
                    isEditing ? onClose() : navigate("/characters");
                  }}
                >
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
