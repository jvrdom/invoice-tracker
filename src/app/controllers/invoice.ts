import { Invoice } from "@/types/invoice";

export async function createInvoice(invoice: Invoice) {
  const response = await fetch("/api/invoice", {
    method: "POST",
    body: JSON.stringify(invoice),
  });

  return response.json();
}
