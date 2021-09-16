import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorPageComponent } from "../shared/components";
import {
  ClComponent,
  Cl3004Component,
  Cl3006Component,
  Cl3000Component,
  Cl3002Component,
  Cl3900Component,
  Cl3901Component,
  Cl3100Component,
  Cl3101Component,
  Cl3102Component,
} from "./";

const routes: Routes = [
  { path: "", component: ClComponent },
  { path: "cl3004", component: Cl3004Component },
  { path: "cl3006", component: Cl3006Component },
  { path: "cl3000", component: Cl3000Component },
  { path: "cl3002", component: Cl3002Component },
  { path: "cl3900", component: Cl3900Component },
  { path: "cl3901", component: Cl3901Component },
  { path: "cl3100", component: Cl3100Component },
  { path: "cl3101", component: Cl3101Component },
  { path: "cl3102", component: Cl3102Component },
  { path: "**", component: ErrorPageComponent },
];

/**
 * 보상 라우트 모듈
 *
 * @export
 * @class ProductRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClRoutingModule {}
