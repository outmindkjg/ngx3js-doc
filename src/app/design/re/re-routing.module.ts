import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorPageComponent } from "../../shared/components";
import {
  ReComponent,
  Re5000Component,
  Re5010Component,
  Re5020Component,
  Re5200Component,
  Re5210Component,
  Re5110Component,
  Re5120Component,
  Re5130Component,
  Re5140Component,
  Re5150Component,
  Re5160Component,
  Re5170Component,
  Re5180Component,
  Re5310Component,
  Re5320Component,
  Re5330Component,
  Re5340Component,
  Re5300Component,
  Re5350Component,
} from "./";

const routes: Routes = [
  { path: "", component: ReComponent },
  { path: "re5000", component: Re5000Component },
  { path: "re5010", component: Re5010Component },
  { path: "re5020", component: Re5020Component },
  { path: "re5200", component: Re5200Component },
  { path: "re5210", component: Re5210Component },
  { path: "re5110", component: Re5110Component },
  { path: "re5120", component: Re5120Component },
  { path: "re5130", component: Re5130Component },
  { path: "re5140", component: Re5140Component },
  { path: "re5150", component: Re5150Component },
  { path: "re5160", component: Re5160Component },
  { path: "re5170", component: Re5170Component },
  { path: "re5180", component: Re5180Component },
  { path: "re5310", component: Re5310Component },
  { path: "re5320", component: Re5320Component },
  { path: "re5330", component: Re5330Component },
  { path: "re5340", component: Re5340Component },
  { path: "re5300", component: Re5300Component },
  { path: "re5350", component: Re5350Component },
  { path: "**", component: ErrorPageComponent },
];

/**
 * 재보험 라우트 모듈
 *
 * @export
 * @class ReRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReRoutingModule {}
