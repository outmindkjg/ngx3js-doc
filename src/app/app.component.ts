import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { AbstractCommonComponent } from "./shared/abstract.common";
import { IAppComponent, MenuVo, UserVo } from "./shared/common.interface";
import { CommonService } from "./shared/services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent extends AbstractCommonComponent implements OnInit, IAppComponent {

  loginInfo: UserVo = null;

  description: string = "";

  menuInfos: MenuVo[] = [];

  pageTitle: string = "None";
  navMap: MenuVo[] = [];

  constructor(protected router: Router, commonService: CommonService) {
    super(commonService);
    this.subscribes.push(router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event["url"]) {
        this.checkRouterUrl(event["urlAfterRedirects"] || event["url"]);
      }
    }));
    this.menuInfos = commonService.getMenuInfos();
    this.loginInfo = commonService.getUser();
    commonService.setAppComponent(this);
    this.commonService.subscribe('menu').subscribe(() => {
      if (this.isNotNullEmpty(this._lastRouterUrl)) {
        this.checkRouterUrl(this._lastRouterUrl);
      }
    });
  }

  collapsedMenu(children: MenuVo[], collapsed: MenuVo) {
    if (collapsed.collapsed) {
      collapsed.collapsed = false;
    } else {
      children.forEach((menu) => {
        if (menu === collapsed) {
          menu.collapsed = true;
        } else {
          menu.collapsed = false;
        }
      });
    }
    return false;
  }

  private _lastRouterUrl : string = '';

  checkRouterUrl(url: string) {
    this._lastRouterUrl = url;
    const [_, menu1, menu2, menu3] = (url + "///").split("/");
    let smenuKey = menu1 + "/" + menu2;
    if (menu1 === 'design') {
      smenuKey += '/' + menu3;
    }
    this.navMap = [];
    this.pageTitle = null;
    this.menuInfos.forEach((menu) => {
      if (menu.path === menu1) {
        menu.selected = true;
        menu.collapsed = true;
        this.navMap.push(menu);
      } else {
        menu.selected = false;
        menu.collapsed = false;
      }
      if (
        menu.children !== undefined &&
        menu.children !== null &&
        menu.children.length > 0
      ) {
        menu.children.forEach((smenu) => {
          let childSelected : boolean = false;
          if (
            smenu.children !== undefined &&
            smenu.children !== null &&
            smenu.children.length > 0
          ) {
            smenu.children.forEach((tmenu) => {
              if (tmenu.path.startsWith(smenuKey)) {
                this.pageTitle = tmenu.name;
                tmenu.selected = true;
                tmenu.collapsed = true;
                childSelected = true;
              } else {
                tmenu.selected = false;
                tmenu.collapsed = false;
              }
            });
          }
          if (childSelected || smenu.path === smenuKey) {
            smenu.selected = true;
            smenu.collapsed = true;
            this.navMap.push(smenu);
          } else {
            smenu.selected = false;
            smenu.collapsed = false;
          }
        });
      }
    });
    if (this.pageTitle === null) {
      switch(menu1) {
        case 'login' :
          this.pageTitle = 'Login';
          break;
        case 'home' :
          this.pageTitle = 'DashBoard';
          break;
      }
    }
  }

  ngOnInit() {}

  showMenu: boolean = true;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  goSearch(event: any) {
    const keyword = event.target.value;
    if (keyword.length > 0) {
      let foundUrl = "";
      this.menuInfos.forEach((menu) => {
        menu.children?.forEach((smenu) => {
          smenu.children?.forEach((tmenu) => {
            if (foundUrl == "" && tmenu.path.indexOf(keyword) > 0) {
              foundUrl = tmenu.path;
            }
          });
        });
      });
      if (foundUrl !== "" && foundUrl.length > 0) {
        this.router.navigateByUrl(foundUrl);
      }
    }
  }

  /**
   * Sets logout
   * 
   * @returns true if logout 
   */
  public setLogout() : boolean {
    this.commonService.setLogout();
    return false;
  }

  public bottomMsg : {
    text : string;
    type : string;
  }[] = null;

  public setBottomMessage(message : string, type : string) {
    if (this.bottomMsg === null) {
      this.bottomMsg = [];
    }
    this.bottomMsg.unshift({
      text : message,
      type : type
    });
    if (this.bottomMsg.length > 5) {
      this.bottomMsg.splice(5);
    }
  }

  public clearBottomMessage() {
    this.bottomMsg = null;
  }

}
