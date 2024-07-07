import { MapLocationWhereInput } from "./MapLocationWhereInput";
import { MapLocationOrderByInput } from "./MapLocationOrderByInput";

export type MapLocationFindManyArgs = {
  where?: MapLocationWhereInput;
  orderBy?: Array<MapLocationOrderByInput>;
  skip?: number;
  take?: number;
};
