import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type TicketWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  buyer?: StringNullableFilter;
  seller?: StringNullableFilter;
  event?: EventWhereUniqueInput;
};
