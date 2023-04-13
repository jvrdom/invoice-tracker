import { Item } from "dynamoose/dist/Item";

export enum InvoiceStatus {
  "Created" = "created",
  "Notified" = "notified",
  "Sent to company" = "sent-to-company",
}

export interface Invoice {
  id: string;
  user: string;
  invoicePath: string;
  status: InvoiceStatus;
  notes: string;
  createdAt?: number;
  updatedAt?: number;
}

export interface InvoiceDB extends Item, Invoice {}
