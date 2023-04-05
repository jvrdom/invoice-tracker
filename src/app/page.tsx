import Link from "next/link";
import Button from "./components/button";

export default function Home() {
  return (
    <main>
      <Button />
      <Link href={"/bruno"}>Bruno</Link>
    </main>
  );
}
