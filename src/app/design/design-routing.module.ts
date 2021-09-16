import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DesignComponent, HomeComponent, LoginComponent } from "./";

const routes: Routes = [
  { path: "", component: DesignComponent },
  {
    path: "login" /* 로그인 */,
    component: LoginComponent,
  },
  {
    path: "home" /* 홈 / 대시보드 */,
    component: HomeComponent,
  },
  {
    path: "uw" /* 계약 */,
    loadChildren: () => import("./uw/uw.module").then((m) => m.UwModule),
  },
  {
    path: "cl" /* 보상 */,
    loadChildren: () => import("./cl/cl.module").then((m) => m.ClModule),
  },
  {
    path: "re" /* 재보험 */,
    loadChildren: () => import("./re/re.module").then((m) => m.ReModule),
  },
  {
    path: "lp" /* 사고예방 */,
    loadChildren: () => import("./lp/lp.module").then((m) => m.LpModule),
  },
  {
    path: "ms" /* 경영지원 */,
    loadChildren: () => import("./ms/ms.module").then((m) => m.MsModule),
  },
  {
    path: "cm" /* 공통업무 */,
    loadChildren: () => import("./cm/cm.module").then((m) => m.CmModule),
  },
  {
    path: "**",
    redirectTo: "home",
  },
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
export class DesignRoutingModule {}
