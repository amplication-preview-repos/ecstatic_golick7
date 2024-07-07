import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MapLocationServiceBase } from "./base/mapLocation.service.base";

@Injectable()
export class MapLocationService extends MapLocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
