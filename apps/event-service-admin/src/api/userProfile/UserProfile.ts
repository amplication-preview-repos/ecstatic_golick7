import { JsonValue } from "type-fest";

export type UserProfile = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string | null;
  email: string | null;
  profilePicture: JsonValue;
};
