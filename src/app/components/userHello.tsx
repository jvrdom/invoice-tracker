"use client";

import { useSession } from "next-auth/react";

export default function Hello({ name }: { name: string }) {
  const { data: session } = useSession();
  console.log(session);
  return <h1>hello {name}</h1>;
}
