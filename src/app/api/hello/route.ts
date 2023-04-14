import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export async function GET(request: Request, response: Response) {
  const session = await getServerSession(authOptions);
  console.log("bruno", session);

  return new Response("Hello, Next.js!");
}
