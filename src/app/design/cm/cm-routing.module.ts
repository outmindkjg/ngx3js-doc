import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorPageComponent } from "../../shared/components";
import {
  CmComponent,
  Cm7700Component,
  Cm7300Component,
  Cm7303Component,
  Cm7310Component,
  Cm7000Component,
  Cm7010Component,
  Cm7020Component,
  Cm7800Component,
  Cm7710Component,
  Cm7600Component,
  Cm7500Component,
  Cm7510Component,
  Cm7520Component,
  Cm7810Component,
  Cm7900Component,
} from "./";

const routes: Routes = [
  { path: "", component: CmComponent },
  { path: "cm7300", component: Cm7300Component },
  { path: "cm7303", component: Cm7303Component },
  { path: "cm7310", component: Cm7310Component },
  { path: "cm7000", component: Cm7000Component },
  { path: "cm7010", component: Cm7010Component },
  { path: "cm7020", component: Cm7020Component },
  { path: "cm7800", component: Cm7800Component },
  { path: "cm7000", component: Cm7000Component },
  { path: "cm7710", component: Cm7710Component },
  { path: "cm7600", component: Cm7600Component },
  { path: "cm7500", component: Cm7500Component },
  { path: "cm7510", component: Cm7510Component },
  { path: "cm7520", component: Cm7520Component },
  { path: "cm7810", component: Cm7810Component },
  { path: "cm7900", component: Cm7900Component },
  { path: "cm7700", component: Cm7700Component },
  { path: "**", component: ErrorPageComponent },
];

/**
 * 공통업무 라우트 모듈
 *
 * @export
 * @class CmRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmRoutingModule {}
