import { InputJsonValue } from "../../types";

export type UserProfileCreateInput = {
  username?: string | null;
  email?: string | null;
  profilePicture?: InputJsonValue;
};
