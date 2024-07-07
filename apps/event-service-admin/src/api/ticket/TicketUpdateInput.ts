import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type TicketUpdateInput = {
  price?: number | null;
  buyer?: string | null;
  seller?: string | null;
  event?: EventWhereUniqueInput | null;
};
