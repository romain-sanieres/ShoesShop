import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FootprintsIcon, MenuIcon, User2Icon } from "lucide-react";
import Link from "next/link";

export default function MobileNavigation() {
  return (
    <div className="md:hidden py-3 flex justify-between items-center border-b">
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <Link href={"/"} className="font-semibold text-xl flex items-center">
        Sh
        <FootprintsIcon />
        se
      </Link>
      <Link href={"/"}>
        <User2Icon />
      </Link>
    </div>
  );
}
