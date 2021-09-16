import { NgModule } from "@angular/core";
import { MODULE_COMPONENTS } from ".";
import { SharedModule } from "../../shared/shared.module";
import { LpRoutingModule } from "./lp-routing.module";

/**
 * 사고예방 모듈
 *
 * @export
 * @class LpModule
 */
@NgModule({
  imports: [LpRoutingModule, SharedModule],
  declarations: [...MODULE_COMPONENTS]
})
export class LpModule { }