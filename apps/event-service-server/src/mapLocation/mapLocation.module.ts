import { Module } from "@nestjs/common";
import { MapLocationModuleBase } from "./base/mapLocation.module.base";
import { MapLocationService } from "./mapLocation.service";
import { MapLocationController } from "./mapLocation.controller";
import { MapLocationResolver } from "./mapLocation.resolver";

@Module({
  imports: [MapLocationModuleBase],
  controllers: [MapLocationController],
  providers: [MapLocationService, MapLocationResolver],
  exports: [MapLocationService],
})
export class MapLocationModule {}
