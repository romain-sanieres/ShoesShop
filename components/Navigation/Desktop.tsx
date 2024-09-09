import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  FootprintsIcon,
  SearchIcon,
  ShoppingBagIcon,
  User2Icon,
} from "lucide-react";
import Link from "next/link";
import Search from "./Search";
export default function DesktopNavigation() {
  return (
    <div className="max-md:hidden py-5 grid grid-cols-3 items-center">
      <h1 className="text-2xl place-self-start font-semibold flex items-center">
        Sh
        <FootprintsIcon />
        se
      </h1>
      <div className="place-self-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <Link href={"/"} className="text-sm px-4 mx-1 hover:underline">
              Support
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex gap-x-6 justify-end place-self-center w-full">
        <Search />
        <User2Icon size={20} className="hover:cursor-pointer" />
        <ShoppingBagIcon size={20} className="hover:cursor-pointer" />
      </div>
    </div>
  );
}
