import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type MapLocationWhereInput = {
  id?: StringFilter;
  address?: StringNullableFilter;
  latitude?: FloatNullableFilter;
  longitude?: FloatNullableFilter;
};
