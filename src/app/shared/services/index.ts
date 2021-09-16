import { AuthGuard } from "./auth.guard";
import { ApiService } from "./api.service";
import { CodeService } from "./code.service";
import { CommonService } from "./common.service";
import { RsaService } from "./rsa.service";
import { SettingsService } from "./settings.service";

export const COMMON_SERVICE = [
  ApiService,
  CommonService,
  CodeService,
  RsaService,
  SettingsService,
  AuthGuard
]

export {
  ApiService,
  CommonService,
  CodeService,
  RsaService,
  SettingsService,
  AuthGuard
}