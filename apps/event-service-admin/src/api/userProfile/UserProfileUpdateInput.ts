import { InputJsonValue } from "../../types";

export type UserProfileUpdateInput = {
  username?: string | null;
  email?: string | null;
  profilePicture?: InputJsonValue;
};
