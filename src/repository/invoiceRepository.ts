import { Invoice, InvoiceDB } from "@/types/invoice";
import * as dynamoose from "dynamoose";
import { QueryResponse } from "dynamoose/dist/ItemRetriever";
import "./connect";
import { invoiceSchema } from "./schemas";

const invoiceModel = dynamoose.model<InvoiceDB>("Invoice", invoiceSchema);

export const createInvoice = async (invoice: Invoice): Promise<InvoiceDB> => {
  return invoiceModel.create(invoice);
};

export const getInvoice = async (id: string): Promise<InvoiceDB> => {
  return invoiceModel.get(id);
};

export const getUseInvoices = async (
  email: string
): Promise<QueryResponse<InvoiceDB>> => {
  return await invoiceModel.query("user").eq(email).exec();
};

export const deleteInvoice = async (id: string): Promise<void> => {
  invoiceModel.delete(id);
};
