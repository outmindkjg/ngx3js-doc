import { NgModule } from "@angular/core";
import { MODULE_COMPONENTS } from ".";
import { SharedModule } from "../shared/shared.module";
import { MsRoutingModule } from "./ms-routing.module";

/**
 * 경영지원 모듈
 *
 * @export
 * @class ClModule
 */
@NgModule({
  imports: [MsRoutingModule, SharedModule],
  declarations: [...MODULE_COMPONENTS]
})
export class MsModule { }