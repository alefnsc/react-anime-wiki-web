import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";

interface iNavbarMenuProps {
  searchValue?: string;
  setSearchValue?: React.Dispatch<React.SetStateAction<string>>;
  search?: boolean;
}

export default function NavbarMenuUI(props: iNavbarMenuProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <Navbar className="border-b-1" onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            color={location.pathname === "/" ? "secondary" : "foreground"}
            onClick={() => handleNavigation("/")}
            className="w-full cursor-pointer"
            size="lg"
          >
            Home
          </Link>
          <Link
            color={
              location.pathname === "/characters" ? "secondary" : "foreground"
            }
            onClick={() => handleNavigation("/characters")}
            className="w-full cursor-pointer"
            size="lg"
          >
            View
          </Link>
          <Link
            color={location.pathname === "/import" ? "secondary" : "foreground"}
            onClick={() => handleNavigation("/import")}
            className="w-full cursor-pointer"
            size="lg"
          >
            Import
          </Link>
          <Link
            color={location.pathname === "/about" ? "secondary" : "foreground"}
            onClick={() => handleNavigation("/about")}
            className="w-full cursor-pointer"
            size="lg"
          >
            About
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
      <NavbarBrand>
        <p
          onClick={() => handleNavigation("/")}
          className="font-bold text-inherit text-xl cursor-pointer"
        >
          AnimeWIKI
        </p>
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
