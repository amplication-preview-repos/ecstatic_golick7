import { Event } from "../event/Event";

export type Ticket = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  price: number | null;
  buyer: string | null;
  seller: string | null;
  event?: Event | null;
};
