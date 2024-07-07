import { TicketUpdateManyWithoutEventsInput } from "./TicketUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  title?: string | null;
  description?: string | null;
  date?: Date | null;
  location?: string | null;
  organizer?: string | null;
  tickets?: TicketUpdateManyWithoutEventsInput;
};
