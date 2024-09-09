import React from "react";
import Link from "next/link";
import { GithubIcon, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { getUser } from "@/actions/user";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Navigation = async () => {
  const session = await getUser();

  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-x-3">
          <Link href="/" prefetch={false}>
            <span className="font-bold text-lg">simple_boilerplate</span>
          </Link>
          <Link
            href="https://github.com/romain-sanieres/simple_boilerplate.git"
            target="_blank"
            className="font-medium hover:text-primary transition flex items-center gap-x-1"
            prefetch={false}
          >
            <GithubIcon className="size-4" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {session ? (
            <>
              {session.role === "ADMIN" ? <Link href={"/"} className="text-red-500">Admin</Link> : null}
              <Link
                href="/dashboard"
                className="font-medium hover:text-primary transition flex items-center gap-x-2 hover:bg-muted duration-300 rounded-full px-4 py-2"
                prefetch={false}
              >
                <span>Dashboard</span>
                <Avatar className="size-6">
                  <AvatarImage src={session.image ?? undefined} />
                  <AvatarFallback className="capitalize">
                    {session.name?.[0] ?? undefined}
                  </AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : null}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="md:hidden">
            <div className="flex flex-col items-start space-y-4 p-4">
              {session ? (
                <SheetTrigger asChild>
                  <Link
                    href="/dashboard"
                    className="font-medium hover:text-primary transition"
                    prefetch={false}
                  >
                    Dashboard
                  </Link>
                </SheetTrigger>
              ) : null}
              <SheetTrigger asChild>
                <Link
                  href="https://github.com/romain-sanieres/simple_boilerplate.git"
                  target="_blank"
                  className="font-medium hover:text-primary transition"
                  prefetch={false}
                >
                  Github
                </Link>
              </SheetTrigger>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
