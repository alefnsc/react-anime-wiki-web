import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function NavbarMenu() {
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

      <NavbarContent as="div" justify="end"></NavbarContent>
    </Navbar>
  );
}
