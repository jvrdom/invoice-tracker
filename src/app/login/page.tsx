"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/dashboard");
  }
  return <button onClick={() => signIn("cognito")}>Sign in</button>;
}
