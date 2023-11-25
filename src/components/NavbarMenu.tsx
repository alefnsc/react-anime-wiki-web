import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
} from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";

interface iNavbarMenuProps {
  searchValue?: string;
  setSearchValue?: React.Dispatch<React.SetStateAction<string>>;
  search?: boolean;
}

export default function NavbarMenu(props: iNavbarMenuProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <Navbar className="border-b-1">
      <NavbarBrand>
        <p className="font-bold text-inherit text-xl">AnimeWIKI</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem
          className="cursor-pointer"
          isActive={location.pathname === "/"}
        >
          <Link
            color={location.pathname === "/" ? "secondary" : "foreground"}
            onClick={() => handleNavigation("/")}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem
          className="cursor-pointer"
          isActive={location.pathname.startsWith("/characters")}
        >
          <Link
            color={
              location.pathname === "/characters" ? "secondary" : "foreground"
            }
            onClick={() => handleNavigation("/characters")}
          >
            View
          </Link>
        </NavbarItem>
        <NavbarItem
          className="cursor-pointer"
          isActive={location.pathname === "/import"}
        >
          <Link
            onClick={() => handleNavigation("/import")}
            aria-current="page"
            color={location.pathname === "/import" ? "secondary" : "foreground"}
          >
            Import
          </Link>
        </NavbarItem>
        <NavbarItem
          className="cursor-pointer"
          isActive={location.pathname === "/about"}
        >
          <Link
            color={location.pathname === "/about" ? "secondary" : "foreground"}
            onClick={() => handleNavigation("/about")}
          >
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        {props.search && props.setSearchValue && (
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
            onChange={(e) =>
              props.setSearchValue && props.setSearchValue(e.target.value)
            }
          />
        )}
      </NavbarContent>
    </Navbar>
  );
}
