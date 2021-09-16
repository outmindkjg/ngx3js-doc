import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./shared/services";

const routes: Routes = [
  {
    path: "login" /* 로그인 */,
    component: LoginComponent,
  },
  {
    path: "home" /* 홈 / 대시보드 */,
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "uw" /* 계약 */,
    loadChildren: () => import("./uw/uw.module").then((m) => m.UwModule),
    canActivateChild: [AuthGuard],
  },
  {
    path: "cl" /* 보상 */,
    loadChildren: () => import("./cl/cl.module").then((m) => m.ClModule),
    canActivateChild: [AuthGuard],
  },
  {
    path: "re" /* 재보험 */,
    loadChildren: () => import("./re/re.module").then((m) => m.ReModule),
    canActivateChild: [AuthGuard],
  },
  {
    path: "lp" /* 사고예방 */,
    loadChildren: () => import("./lp/lp.module").then((m) => m.LpModule),
    canActivateChild: [AuthGuard],
  },
  {
    path: "ms" /* 경영지원 */,
    loadChildren: () => import("./ms/ms.module").then((m) => m.MsModule),
    canActivateChild: [AuthGuard],
  },
  {
    path: "cm" /* 공통업무 */,
    loadChildren: () => import("./cm/cm.module").then((m) => m.CmModule),
    canActivateChild: [AuthGuard],
  },
  {
    path: "design" /* 디자인 */,
    loadChildren: () => import("./design/design.module").then((m) => m.DesignModule),
    canActivateChild: [AuthGuard],
  },
  {
    path: "**",
    redirectTo: "home",
  },
];

/**
 * App 라우트 모듈
 *
 * @export
 * @class AppRoutingModule
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
