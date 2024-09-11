"use client";
import { getUser } from "@/actions/user";
import { User2Icon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function User() {
  const [session, setSession] = useState<any>(null);
  useEffect(() => {
    const user = async () => {
      const res = await getUser();
      if (res) setSession(res);
    };
    user();
  }, []);
  return (
    <Link href={session ? "/profile" : "/login"}>
      <User2Icon size={20} className="hover:cursor-pointer" />
    </Link>
  );
}
