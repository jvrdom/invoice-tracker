import { signIn, signOut, useSession } from "next-auth/react";

export default function Bruno() {
  const { data: session, status } = useSession();
  console.log("bruno", status, session);

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("cognito")}>Sign in</button>
    </>
  );
}
