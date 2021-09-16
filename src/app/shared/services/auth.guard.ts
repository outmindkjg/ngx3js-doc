import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { AbstractCommonComponent } from "../abstract.common";
import { CommonService } from "./common.service";

/**
 * Auth guard
 */
@Injectable()
export class AuthGuard
  extends AbstractCommonComponent
  implements CanActivate, CanActivateChild
{
  /**
   * Creates an instance of auth guard.
   *
   * @param commonService
   */
  constructor(commonService: CommonService, private router: Router) {
    super(commonService);
  }

  /**
   * Determines whether activate can
   *
   * @param route
   * @param state
   * @returns
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.commonService.isSettingLoaded()) {
      return new Promise<boolean | UrlTree>((resolve) => {
        this.commonService.loadSetting().then(() => {
          if (this.commonService.isLogined()) {
            resolve(true);
          } else {
            resolve(this.router.parseUrl("/login"));
          }
        });
      });
    } else if (this.commonService.isLogined()) {
      return true;
    } else {
      return this.router.parseUrl("/login");
    }
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(route, state);
  }
}
