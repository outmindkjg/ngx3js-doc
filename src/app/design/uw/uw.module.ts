import { NgModule } from "@angular/core";
import { MODULE_COMPONENTS } from ".";
import { SharedModule } from "../../shared/shared.module";
import { UwRoutingModule } from "./uw-routing.module";

/**
 * 계약 모듈
 *
 * @export
 * @class UwModule
 */
@NgModule({
  imports: [UwRoutingModule, SharedModule],
  declarations: [...MODULE_COMPONENTS],
})
export class UwModule {}
