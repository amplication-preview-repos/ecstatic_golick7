import { MapLocation as TMapLocation } from "../api/mapLocation/MapLocation";

export const MAPLOCATION_TITLE_FIELD = "address";

export const MapLocationTitle = (record: TMapLocation): string => {
  return record.address?.toString() || String(record.id);
};
