import { Ticket } from "../ticket/Ticket";

export type Event = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  date: Date | null;
  location: string | null;
  organizer: string | null;
  tickets?: Array<Ticket>;
};
