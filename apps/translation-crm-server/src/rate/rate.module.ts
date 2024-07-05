import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RateModuleBase } from "./base/rate.module.base";
import { RateService } from "./rate.service";
import { RateController } from "./rate.controller";
import { RateResolver } from "./rate.resolver";

@Module({
  imports: [RateModuleBase, forwardRef(() => AuthModule)],
  controllers: [RateController],
  providers: [RateService, RateResolver],
  exports: [RateService],
})
export class RateModule {}
