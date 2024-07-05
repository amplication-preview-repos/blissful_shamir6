import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CertificationModuleBase } from "./base/certification.module.base";
import { CertificationService } from "./certification.service";
import { CertificationController } from "./certification.controller";
import { CertificationResolver } from "./certification.resolver";

@Module({
  imports: [CertificationModuleBase, forwardRef(() => AuthModule)],
  controllers: [CertificationController],
  providers: [CertificationService, CertificationResolver],
  exports: [CertificationService],
})
export class CertificationModule {}
