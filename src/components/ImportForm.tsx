import {
  Input,
  Textarea,
  Button,
  Progress,
  Select,
  SelectItem,
} from "@nextui-org/react";

import { IoClose } from "react-icons/io5";
import "react-toastify/dist/ReactToastify.css";

import { FiSave } from "react-icons/fi";

import {
  createAnime,
  createCharacter,
  getAnimes,
} from "../services/apiService";

import { iCharacter } from "../types/character";

import { useEffect, useState } from "react";

import { ChangeEvent } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../services/firebaseService";

import { toast } from "react-toastify";
import { iAnime } from "../types/anime";

interface ImportFormProps {
  onOpen: () => void;
  errNotify: (error: string) => void;
  onCharacterName: (name: string) => void;
}

export default function ImportForm({
  onOpen,
  errNotify,
  onCharacterName,
}: ImportFormProps) {
  const [name, setName] = useState<string>("");
  const [imgURL, setImgURL] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [characteristics, setCharacteristics] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [anime, setAnime] = useState<string>("");
  const [animeId, setAnimeId] = useState<number>(0);
  const [prefix, setPrefix] = useState<string>("");
  const [release, setRelease] = useState<number>(0);
  const [director, setDirector] = useState<string>("");
  const [episodes, setEpisodes] = useState<number>(0);
  const [publication, setPublication] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [animeName, setAnimeName] = useState<string>("");
  const [allAnimes, setAllAnimes] = useState<iAnime[]>([]);

  useEffect(() => {
    const getAllAnimes = async () => {
      const allAnimes = await getAnimes();

      setAllAnimes(allAnimes);
    };
    getAllAnimes();
  }, []);

  const selectAnimes = [];

  selectAnimes.push(
    <SelectItem isDisabled key="default" value="Select an Anime">
      Select an Anime
    </SelectItem>,
    <SelectItem key="new" value="new">
      New
    </SelectItem>
  );

  allAnimes.forEach((animeSelect) => {
    selectAnimes.push(
      <SelectItem key={animeSelect.id!} value={animeSelect.id}>
        {animeSelect.name}
      </SelectItem>
    );
  });

  const notify = (field: string) =>
    toast.error(`${field} field is required!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      theme: "light",
    });

  async function handleSaveAnime(anime: iAnime) {
    try {
      const missingFields = Object.keys(anime).filter(
        (key) => anime[key as keyof iAnime] === ""
      );
      if (missingFields.length > 0) {
        const fieldUpper =
          missingFields[0].charAt(0).toUpperCase() + missingFields[0].slice(1);
        notify(fieldUpper);

        return;
      } else {
        const id = await createAnime(anime);
        setAnimeId(id);
        return id;
      }
    } catch (error) {
      errNotify(error as string);
    }
  }

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
        console.log(character);
        await createCharacter(character);
        onCharacterName(name);
        return onOpen();
      }
    } catch (error) {
      errNotify(error as string);
    }
  }

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setName(newName);
  };

  const handleAnimeNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const anime = event.target.value;
    setAnimeName(anime);
  };

  const handleUploadChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const file = event.target.files?.[0];
    if (file === null) return;

    const storageRef = ref(storage, `images/${file?.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file!);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        alert(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log("File available at", url);
          setImgURL(url);
        });
      }
    );
  };

  const handleCharacteristicsChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newCharacteristics = event.target.value;
    setCharacteristics(newCharacteristics);
  };

  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newAge = Number(event.target.value);
    setAge(newAge);
  };

  const handleAnimeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const anime = event.target.value;
    setAnime(anime);
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
    const newEpisodes = Number(event.target.value);
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

  const handleImageDelete = () => {
    setImgURL("");
    setProgress(0);
  };

  const handleSaveButtonClick = async () => {
    if (anime === "new") {
      try {
        const { id } = await handleSaveAnime({
          name: animeName,
          release,
          director,
          episodes,
          publication,
          description,
        });
        await handleSaveCharacter({
          name,
          characteristics,
          age,
          animeId: id,
          prefix,
          imageUrl: imgURL,
        });
      } catch (error) {
        errNotify(error as string);
      }
    } else {
      handleSaveCharacter({
        name,
        characteristics,
        age,
        animeId: animeId,
        prefix,
        imageUrl: imgURL,
      });
    }
  };

  return (
    <>
      <form
        className="flex-1 justify-center items-center flex flex-col gap-5 w-full max-w-xs"
        id="form"
        name="form"
      >
        {imgURL != "" && progress == 100 && (
          <div>
            <div className="flex flex-col items-end">
              <IoClose
                className="w-10 h-10 cursor-pointer opacity-75 hover:opacity-100"
                onClick={handleImageDelete}
              />
            </div>
            <img
              src={imgURL}
              alt="uploaded"
              className="w-60 h-60 box-border object-cover m-auto rounded-2xl"
            />
          </div>
        )}
        <Input
          type="text"
          label="Name"
          labelPlacement="outside"
          placeholder="Character name"
          color="secondary"
          variant="bordered"
          value={name}
          onChange={handleNameChange}
          className="max-w-xs pb-4"
          size="lg"
          isRequired
        />
        <Input
          style={{ display: "block" }}
          name="image"
          placeholder="Select an image"
          color="secondary"
          variant="bordered"
          className="max-w-xs pb-4"
          size="lg"
          onChange={handleUploadChange}
          type="file"
          isRequired
        />

        {progress != 0 && progress != 100 && (
          <div className="flex flex-col gap-5 w-full max-w-xs">
            <Progress
              color="secondary"
              aria-label="Loading..."
              value={progress}
            />
          </div>
        )}
        <Textarea
          placeholder="Character characteristics"
          color="secondary"
          variant="bordered"
          label="Characteristics"
          labelPlacement="outside"
          value={characteristics}
          onChange={handleCharacteristicsChange}
          className="w-full max-w-xs pt-4"
          size="lg"
          isRequired
        />

        <Input
          type="number"
          label="Age"
          labelPlacement="outside"
          placeholder="Character age"
          color="secondary"
          variant="bordered"
          value={age.toString()}
          onChange={handleAgeChange}
          className="max-w-xs pb-4"
          size="lg"
          isRequired
        />

        <Input
          type="text"
          labelPlacement="outside"
          label="Prefix"
          placeholder="Character prefix"
          color="secondary"
          variant="bordered"
          value={prefix}
          onChange={handlePrefixChange}
          className="max-w-xs pb-4"
          size="lg"
          isRequired
        />

        <Select
          color="secondary"
          variant="bordered"
          isRequired
          labelPlacement="outside"
          label="Anime"
          placeholder="Select an Anime"
          defaultSelectedKeys={["default"]}
          className="max-w-xs"
          size="lg"
          value={anime}
          onChange={handleAnimeChange}
        >
          {selectAnimes}
        </Select>
        {anime == "new" && (
          <>
            <h1 className="text-purple-700 text-xl font-bold my-10">
              Create a new Anime
            </h1>

            <Input
              type="text"
              label="Name"
              labelPlacement="outside"
              placeholder="Anime name"
              color="secondary"
              variant="bordered"
              value={animeName}
              onChange={handleAnimeNameChange}
              className="max-w-xs pb-4"
              size="lg"
              isRequired
            />
            <Input
              type="number"
              label="Release Year"
              labelPlacement="outside"
              placeholder="Anime release"
              color="secondary"
              variant="bordered"
              value={release.toString()}
              onChange={handleReleaseChange}
              className="max-w-xs pb-4"
              size="lg"
              isRequired
            />
            <Input
              type="text"
              label="Director"
              labelPlacement="outside"
              placeholder="Anime director"
              color="secondary"
              variant="bordered"
              value={director}
              onChange={handleDirectorChange}
              className="max-w-xs pb-4"
              size="lg"
              isRequired
            />
            <Input
              type="text"
              label="Episodes"
              labelPlacement="outside"
              placeholder="Anime episode number"
              color="secondary"
              variant="bordered"
              value={episodes.toString()}
              onChange={handleEpisodesChange}
              className="max-w-xs pb-4"
              size="lg"
              isRequired
            />
            <Input
              type="text"
              label="Publication"
              labelPlacement="outside"
              placeholder="Anime publication range"
              color="secondary"
              variant="bordered"
              value={publication}
              onChange={handlePublicationChange}
              className="max-w-xs pb-4"
              size="lg"
              isRequired
            />
            <Textarea
              placeholder="Anime Description"
              color="secondary"
              variant="bordered"
              label="Description"
              labelPlacement="outside"
              value={description}
              onChange={handleDescriptionChange}
              className="w-full max-w-xs pt-4"
              size="lg"
              isRequired
            />
          </>
        )}

        <Button
          className="my-6"
          size="lg"
          color="secondary"
          onClick={handleSaveButtonClick}
        >
          <FiSave className="w-6 h-6" /> Save
        </Button>
      </form>
    </>
  );
}
