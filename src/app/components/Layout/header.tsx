"use client";
import { Button, Header as HeaderM } from "@mantine/core";
import { signOut } from "next-auth/react";

export default function Header() {
  return (
    <HeaderM height={60} p="xs">
      my header
      <Button
        onClick={(event) =>
          signOut({ callbackUrl: "http://localhost:3000/login" })
        }
      >
        Logout
      </Button>
    </HeaderM>
  );
}
