import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorPageComponent } from "../../shared/components";
import {
  LpComponent,
  Lp4000Component,
  Lp4010Component,
  Lp4020Component,
  Lp4040Component,
  Lp4110Component,
  Lp4100Component,
  Lp4200Component,
} from "./";

const routes: Routes = [
  { path: "", component: LpComponent },
  { path: "lp4000", component: Lp4000Component },
  { path: "lp4010", component: Lp4010Component },
  { path: "lp4020", component: Lp4020Component },
  { path: "lp4040", component: Lp4040Component },
  { path: "lp4110", component: Lp4110Component },
  { path: "lp4100", component: Lp4100Component },
  { path: "lp4200", component: Lp4200Component },
  { path: "**", component: ErrorPageComponent },
];

/**
 * 사고예방 라우트 모듈
 *
 * @export
 * @class LpRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LpRoutingModule {}
