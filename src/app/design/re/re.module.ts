import { NgModule } from "@angular/core";
import { MODULE_COMPONENTS } from ".";
import { SharedModule } from "../../shared/shared.module";
import { ReRoutingModule } from "./re-routing.module";

/**
 * 재보험 모듈
 *
 * @export
 * @class ReModule
 */
@NgModule({
  imports: [ReRoutingModule, SharedModule],
  declarations: [...MODULE_COMPONENTS]
})
export class ReModule { }