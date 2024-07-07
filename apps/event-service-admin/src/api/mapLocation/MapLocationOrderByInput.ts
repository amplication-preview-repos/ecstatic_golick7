import { SortOrder } from "../../util/SortOrder";

export type MapLocationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  address?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
};
