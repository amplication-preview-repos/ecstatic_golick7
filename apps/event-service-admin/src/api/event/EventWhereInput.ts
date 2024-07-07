import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type EventWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  location?: StringNullableFilter;
  organizer?: StringNullableFilter;
  tickets?: TicketListRelationFilter;
};
