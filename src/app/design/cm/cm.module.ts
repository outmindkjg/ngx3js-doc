import { NgModule } from "@angular/core";
import { MODULE_COMPONENTS } from ".";
import { SharedModule } from "../../shared/shared.module";
import { CmRoutingModule } from "./cm-routing.module";

/**
 * 공통업무 모듈
 *
 * @export
 * @class ClModule
 */
@NgModule({
  imports: [CmRoutingModule, SharedModule],
  declarations: [...MODULE_COMPONENTS]
})
export class CmModule { }