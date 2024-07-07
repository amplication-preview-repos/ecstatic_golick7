import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  email?: SortOrder;
  profilePicture?: SortOrder;
};
