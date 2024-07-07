import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  price?: SortOrder;
  buyer?: SortOrder;
  seller?: SortOrder;
  eventId?: SortOrder;
};
