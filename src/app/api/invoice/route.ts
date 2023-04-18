import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { createInvoice } from "@/repository/invoiceRepository";
import { Invoice } from "@/types/invoice";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
  const session = await getServerSession(authOptions);
  console.log("bruno", session);

  return new Response("Hello, Next.js!");
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  const invoice: Invoice = await request.json();
  if (invoice.user !== session?.user?.email) {
    return NextResponse.json(
      { message: "User does not match" },
      { status: 400 }
    );
  }

  const newInvoice = await createInvoice(invoice);

  return NextResponse.json({ invoice: newInvoice }, { status: 200 });
}
