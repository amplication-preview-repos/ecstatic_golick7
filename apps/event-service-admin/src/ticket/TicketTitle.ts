import { Ticket as TTicket } from "../api/ticket/Ticket";

export const TICKET_TITLE_FIELD = "buyer";

export const TicketTitle = (record: TTicket): string => {
  return record.buyer?.toString() || String(record.id);
};
