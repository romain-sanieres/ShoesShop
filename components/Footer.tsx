import { FootprintsIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col justify-between h-80 bg-foreground mt-20 pt-10 pb-3 px-5">
      <div className="max-w-7xl mx-auto w-full flex items-start justify-between max-md:flex-col">
        <div>
          <p className="text-background max-md:text-2xl text-5xl flex items-center">
            Sh
            <FootprintsIcon size={40} />
            es.com
          </p>
        </div>
        <div className="flex w-full max-md:justify-between justify-end md:gap-x-20 max-md:mt-10">
          <div>
            <p className="text-background text-2xl">Products</p>
            <ul className="text-background space-y-2 mt-4">
              <li>
                <Link href="/men" className="hover:underline">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/women" className="hover:underline">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Collection
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-background text-2xl">Pages</p>
            <ul className="text-background space-y-2 mt-4">
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl text-center mx-auto w-full">
        <p className="text-background">
          © {new Date().getFullYear()} SHOES INC.
        </p>
      </div>
    </footer>
  );
}
