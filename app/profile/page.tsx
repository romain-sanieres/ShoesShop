"use client";
import { logout } from "@/actions/authActions";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Profile() {
  return (
    <Button variant={"destructive"} onClick={() => logout()}>
      Logout
    </Button>
  );
}
