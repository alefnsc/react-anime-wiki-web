import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
} from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";

interface iNavbarMenuProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function NavbarMenu(props: iNavbarMenuProps) {
  return (
    <Navbar className="border-b-1">
      <NavbarBrand>
        <p className="font-bold text-inherit">AnimeWIKI</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="secondary" href="#">
            View
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page" color="foreground">
            Import
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<CiSearch className="w-6 h-6" />}
          type="search"
          value={props.searchValue}
          onChange={(e) => props.setSearchValue(e.target.value)}
        />
      </NavbarContent>
    </Navbar>
  );
}
