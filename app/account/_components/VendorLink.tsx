"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const pages = [
  {
    link: "dashboard",
    name: "dashboard",
  },
  {
    link: "company",
    name: "my company",
  },
  {
    link: "stock",
    name: "stock",
  },

];
export default function VendorLink() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-y-1">
      {pages.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className={`py-3 pl-2 capitalize rounded w-full duration-200 ${
            pathname.includes(item.link)
              ? "bg-neutral-50"
              : "hover:bg-neutral-100"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
