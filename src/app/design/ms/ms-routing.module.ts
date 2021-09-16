import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorPageComponent } from "../../shared/components";
import {
  MsComponent,
  Ms6000Component,
  Ms6002Component,
  Ms6003Component,
  Ms6004Component,
  Ms6005Component,
  Ms6100Component,
  Ms6101Component,
  Ms6102Component,
  Ms6007Component,
} from "./";

const routes: Routes = [
  { path: "", component: MsComponent },
  { path: "ms6000", component: Ms6000Component },
  { path: "ms6002", component: Ms6002Component },
  { path: "ms6003", component: Ms6003Component },
  { path: "ms6004", component: Ms6004Component },
  { path: "ms6005", component: Ms6005Component },
  { path: "ms6100", component: Ms6100Component },
  { path: "ms6101", component: Ms6101Component },
  { path: "ms6102", component: Ms6102Component },
  { path: "ms6007", component: Ms6007Component },
  { path: "**", component: ErrorPageComponent },
];

/**
 * 경영지원 라우트 모듈
 *
 * @export
 * @class MsRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MsRoutingModule {}
