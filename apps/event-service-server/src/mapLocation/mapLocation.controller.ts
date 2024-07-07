import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MapLocationService } from "./mapLocation.service";
import { MapLocationControllerBase } from "./base/mapLocation.controller.base";

@swagger.ApiTags("mapLocations")
@common.Controller("mapLocations")
export class MapLocationController extends MapLocationControllerBase {
  constructor(protected readonly service: MapLocationService) {
    super(service);
  }
}
