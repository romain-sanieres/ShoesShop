import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
export default function Search() {
  return (
    <Sheet>
      <SheetTrigger className="p-2">
        <SearchIcon size={20} className="hover:cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription className="mt-8">
            <Input autoFocus placeholder="Search"/>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
