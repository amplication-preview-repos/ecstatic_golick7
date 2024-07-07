import * as graphql from "@nestjs/graphql";
import { MapLocationResolverBase } from "./base/mapLocation.resolver.base";
import { MapLocation } from "./base/MapLocation";
import { MapLocationService } from "./mapLocation.service";

@graphql.Resolver(() => MapLocation)
export class MapLocationResolver extends MapLocationResolverBase {
  constructor(protected readonly service: MapLocationService) {
    super(service);
  }
}
