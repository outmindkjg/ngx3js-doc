import { NgModule } from "@angular/core";
import { MODULE_COMPONENTS } from "./";
import { SharedModule } from "../shared/shared.module";
import { DesignRoutingModule } from "./design-routing.module";

/**
 * 보상 모듈
 *
 * @export
 * @class ClModule
 */
@NgModule({
  imports: [DesignRoutingModule, SharedModule],
  declarations: [...MODULE_COMPONENTS]
})
export class DesignModule { }