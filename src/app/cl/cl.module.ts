import { NgModule } from "@angular/core";
import { MODULE_COMPONENTS } from ".";
import { SharedModule } from "../shared/shared.module";
import { ClRoutingModule } from "./cl-routing.module";

/**
 * 보상 모듈
 *
 * @export
 * @class ClModule
 */
@NgModule({
  imports: [ClRoutingModule, SharedModule],
  declarations: [...MODULE_COMPONENTS]
})
export class ClModule { }