import { useState } from "react";

import { Card, CardBody, useDisclosure } from "@nextui-org/react";
import NavbarMenu from "../components/NavbarMenu";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InfoCardModal from "../components/InfoCardModal";
import Footer from "../components/Footer";
import ImportForm from "../components/ImportForm";

export default function AnimeWikiUpdatePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [characterName, setCharacterName] = useState("");

  const handleCharacterName = (name: string) => {
    setCharacterName(name);
  };
  const errNotify = (error: string) =>
    toast.error(`${error}`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      theme: "light",
    });

  return (
    <>
      <NavbarMenu search={false} />
      <Card className="p-10 sm:max-w-[300px] md:max-w-[600px] lg:max-w-[800px] m-auto mt-10">
        <h1 className="text-purple-700 text-4xl font-bold mb-4">
          Create Character
        </h1>
        <CardBody className="flex items-center justify-center py-8">
          <ImportForm
            onOpen={onOpen}
            errNotify={errNotify}
            onCharacterName={handleCharacterName}
          />
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
      {isOpen && (
        <InfoCardModal
          isOpen={isOpen}
          onOpenChange={onClose}
          characterName={characterName}
          isEditing={false}
        />
      )}
      <Footer />
    </>
  );
}
