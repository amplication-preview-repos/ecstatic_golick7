import { TicketCreateNestedManyWithoutEventsInput } from "./TicketCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  title?: string | null;
  description?: string | null;
  date?: Date | null;
  location?: string | null;
  organizer?: string | null;
  tickets?: TicketCreateNestedManyWithoutEventsInput;
};
