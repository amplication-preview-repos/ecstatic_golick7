import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type TicketCreateInput = {
  price?: number | null;
  buyer?: string | null;
  seller?: string | null;
  event?: EventWhereUniqueInput | null;
};
