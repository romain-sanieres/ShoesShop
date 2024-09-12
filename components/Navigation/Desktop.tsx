import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FootprintsIcon } from "lucide-react";
import Link from "next/link";
import Search from "./Search";
import Cart from "./Cart/Cart";
import User from "./User";

export default function DesktopNavigation() {
  return (
    <div className="max-md:hidden py-5 grid grid-cols-3 items-center">
      <Link
        href={"/"}
        className="text-3xl place-self-start font-semibold flex items-center"
      >
        Sh
        <FootprintsIcon />
        es
      </Link>
      <div className="place-self-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Men</NavigationMenuTrigger>
              <NavigationMenuContent className="py-5 flex">
                <div className="flex gap-x-4">
                  <NavigationMenuLink href="/">
                    <div className="w-40 h-60 bg-secondary hover:bg-secondary/80 duration-500 rounded-sm"></div>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/">
                    <div className="w-40 h-60 bg-secondary hover:bg-secondary/80 duration-500 rounded-sm"></div>
                  </NavigationMenuLink>
                </div>
                <div className="flex flex-col gap-y-3">
                  <NavigationMenuLink className="hover:underline" href="/">
                    Chaussures
                  </NavigationMenuLink>
                  <NavigationMenuLink className="hover:underline" href="/">
                    Chaussettes
                  </NavigationMenuLink>
                  <NavigationMenuLink className="hover:underline" href="/">
                    Lacets
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Women</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Collection</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <Link href={"/"} className="px-4 mx-1 hover:underline">
              Support
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex gap-x-2 justify-end place-self-center w-full">
        <Search />
        <User />
        <Cart />
      </div>
    </div>
  );
}
