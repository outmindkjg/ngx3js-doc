import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { locale } from "devextreme/localization";
import dxDateBox from "devextreme/ui/date_box";
import * as DEV_DIALOG from "devextreme/ui/dialog";
import notify from "devextreme/ui/notify";
import * as moment from "moment/moment";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { Subject, Subscription } from "rxjs";
import { Observable } from "rxjs/Observable";
import { environment } from "../../../environments/environment";
import { TMP_NAVIGATION } from "../navigation";
import { AbstractBaseService } from "./../abstract.base";
import {
  ButtonVo,
  CodeVo,
  CudItemListVo,
  IAppComponent,
  MenuVo,
  NotifyVo,
  PagingVo,
  SearchParamVo,
  SiteConfigVo,
  UserVo,
} from "./../common.interface";
import { ApiService } from "./api.service";
import { CodeService } from "./code.service";
import { RsaService } from "./rsa.service";
import { SettingsService } from "./settings.service";

export { FormBuilder } from "@angular/forms";

/** 상품카테고리 정보 */
export interface CategoryVo {
  /** 코드 */
  code: string;

  /** 텍스트 */
  text: string;

  /** 표시명 로케일 */
  textLocale?: any;

  /** 관련수 */
  cnt?: number;

  /** 선택여부 */
  selected?: boolean;

  /** 닫힘 여부 */
  collapsed?: boolean;

  /** 상위 카테고리 */
  parent?: CategoryVo;

  /** 부모의 자식  (형제 요소) */
  parentChildren?: CategoryVo[];

  /** 자식 카테고리 */
  children?: CategoryVo[];
}

/**
 * 공통 서비스
 *
 * @export
 * @class CommonService
 */
@Injectable()
export class CommonService extends AbstractBaseService {
  /**
   * 코드 서비스
   *
   * @type {CodeService}
   */
  public codeService: CodeService;

  /**
   * 현재 사용 중인 로케일
   *
   * @private
   * @type {string}
   */
  protected locale: string = "en";

  /**
   * 현재 사용중인 통화
   *
   * @private
   * @type {string}
   */
  protected currency: string = "KRW";

  /**
   * 로드된 사이트 정보
   *
   * @private
   * @type {SiteConfigVo}
   */
  protected siteConfig: SiteConfigVo = {
    submenuMallConf: {},
    siteLocale: [],
    useCurrency: [],
    snsShare: [],
    snsLogin: [],
  };

  /**
   * Creates an instance of CommonService.
   *
   * @constructor
   * @param {ApiService} api
   * @param {SettingsService} settings
   * @param {BsModalService} modalService
   * @param {TranslateService} translate
   * @param {RsaService} rsaService
   * @param {Router} router
   * @param {SharedConfService} sharedConf
   * @param {UiNotificationService} notificationService
   * @param {BsLocaleService} bsLocaleService
   * @param {HttpClient} http
   */
  constructor(
    protected api: ApiService,
    protected settings: SettingsService,
    protected modalService: BsModalService,
    protected translate: TranslateService,
    protected rsaService: RsaService,
    protected router: Router,
    http: HttpClient
  ) {
    super();
    this.codeService = new CodeService();
    translate.setDefaultLang("en");
    locale("en");
    // loadMessages({ en : { 'dxDataGrid-editingConfirmDeleteMessage' : 'test'}})
    dxDateBox.defaultOptions({
      options: {
        displayFormat: "yyyy-MM-dd",
      },
    });
  }

  /**
   * 어플 로드 컨포넌트
   *
   * @private
   * @type {IAppComponent}
   */
  protected appComponent: IAppComponent = null;

  /**
   * 설정 로드 여부
   *
   * @private
   * @type {boolean}
   */
  protected _settingLoaded = false;

  /**
   * 로드된 사용자 정보
   *
   * @private
   * @type {UserVo}
   */
  protected userInfo: UserVo = {
    userNm: "",
    empNo: "",
    userId : "",
    lognTyCd : ""
  };

  /**
   * 로케일 변경시 구독
   *
   * @private
   */
  protected localeSubject = new Subject<string>();

  /**
   * 메뉴 변경시 구독하기
   *
   * @private
   */
  protected menuSubject = new Subject<MenuVo[]>();

  /**
   * 토큰 변경시 구독하기
   *
   * @private
   */
  protected tokenSubject = new Subject<string | null>();

  /**
   * 로그인시 구독하기
   *
   * @private
   */
  protected loginSubject = new Subject<UserVo>();

  /**
   * 사이트 정보 변경시 구독하기
   *
   * @private
   */
  protected configSubject = new Subject<SiteConfigVo>();

  /**
   * 구독하기
   *
   * @param {("locale" | "token" | "login" | "config" | "menu")} subType
   * @returns {Observable<any>}
   */
  subscribe(
    subType: "locale" | "token" | "login" | "config" | "menu"
  ): Observable<any> {
    switch (subType) {
      case "menu":
        return this.menuSubject.asObservable();
      case "token":
        return this.tokenSubject.asObservable();
      case "login":
        return this.loginSubject.asObservable();
      case "config":
        return this.configSubject.asObservable();
      case "locale":
      default:
        return this.localeSubject.asObservable();
    }
  }

  /**
   * 설정 서비스 가져오기
   *
   * @returns {SettingsService}
   */
  public getSettingService(): SettingsService {
    return this.settings;
  }

  /**
   * 어플 로드 설정하기
   *
   * @param {IAppComponent} appComponent
   */
  public setAppComponent(appComponent: IAppComponent) {
    this.appComponent = appComponent;
  }

  /**
   * 어플 로드 가져오기
   *
   * @returns {IAppComponent}
   */
  public getAppComponent(): IAppComponent {
    return this.appComponent;
  }

  public getSetting(): SettingsService {
    return this.settings;
  }

  public isSettingLoaded(): boolean {
    return this._settingLoaded;
  }

  /**
   * 설정 로드 하기
   *
   * @returns {Promise<void>}
   */
  public loadSetting(): Promise<any> {
    return new Promise<any>((resolve) => {
      this.settings.load().subscribe(() => {
        const settingValue = this.settings.allSettings;
        let locale = "en";
        if (settingValue.locale) {
          locale = settingValue.locale;
        }
        if (this.lastLocale != null && this.lastLocale != "") {
          locale = this.lastLocale;
        }
        if (locale == "") {
          const browserLang = this.translate.getBrowserLang();
          if (browserLang !== undefined) {
            switch (browserLang) {
              default:
                locale = "en";
                break;
            }
          }
        }
        this.changeLocale(locale);
        this._settingLoaded = true;
        if (this.isNotNullEmpty(settingValue.sessToken)) {
          this.sessToken = settingValue.sessToken;
        } else {
          this.sessToken = null;
        }
        if (this.sessToken === null) {
          this.getRequestOptions().then(() => {
            this.tokenSubject.next(this.sessToken);
            resolve(settingValue);
          });
        } else {
          this.reloadUserInfo().then(() => {
            this.tokenSubject.next(this.sessToken);
            resolve(settingValue);
          });
        }
      });
    });
  }

  /**
   * 디버그 로그
   *
   * @param {string} key
   * @param {*} value
   */
  public debugLog(key: string, value: any) {
    console.error(key, JSON.stringify(value));
  }

  /**
   * 빈값여부 확인
   *
   * @param {*} value
   * @returns {boolean}
   */
  public isNullEmpty(value: any): boolean {
    return !this.isNotNullEmpty(value);
  }

  /**
   * 빈값여부 확인
   *
   * @param {*} value
   * @returns {boolean}
   */
  public isNotNullEmpty(value: any): boolean {
    if (value === undefined || value === null || value === "" || value === 0) {
      return false;
    }
    if (typeof value === "string") {
      if (value.split(" ").join("") === "") {
        return false;
      }
    } else if (Array.isArray(value) && value.length === 0) {
      return false;
    }
    return true;
  }

  /**
   * 로그인 여부
   *
   * @returns {boolean}
   */
  public isLogined(): boolean {
    return this.userInfo && this.userInfo.empNo !== '';
  }

  /**
   * 사용자 정보 가져오기
   *
   * @returns {UserVo}
   */
  getUser(): UserVo {
    return this.userInfo;
  }

  /**
   * 로그 아웃
   */
  public setLogout() {
    this.getView("logout").then(() => {
      this.settings.setValue("sessToken", null);
      this.sessToken = null;
      this.setUser(null);
      this.reloadUserInfo().then(() => {
        this.goLogin();
        this.openNotify("MSG_LOGOUTED", "info");
      });
    }).catch(() => {
      this.settings.setValue("sessToken", null);
      this.sessToken = null;
      this.setUser(null);
      this.reloadUserInfo().then(() => {
        this.goLogin();
        this.openNotify("MSG_LOGOUTED", "info");
      });
    });
  }

  /**
   * 사용자 정보 설정하기
   *
   * @param {UserVo} userInfo
   * @returns
   */
  setUser(userInfo: UserVo | null) {
    if (userInfo != null) {
      this.userInfo.userNm = userInfo.userNm;
      this.userInfo.empNo = userInfo.empNo;
      this.userInfo.userId = userInfo.userId;
      this.userInfo.lognTyCd = userInfo.lognTyCd;
    } else {
      this.userInfo.userNm = "";
      this.userInfo.empNo = "";
      this.userInfo.userId = "";
      this.userInfo.lognTyCd = "";
    }
    this.loginSubject.next(this.userInfo);
  }

  menuInfos: MenuVo[] = [];

  /**
   * 메뉴 정보 가져오기
   *
   * @returns {Promise<UserVo>}
   */
  public getMenuInfos(): MenuVo[] {
    return this.menuInfos;
  }

  /**
   * 메뉴 정보 가져오기
   *
   * @returns {Promise<UserVo>}
   */
  protected setMenuInfos(menuInfos: MenuVo[]) {
    this.menuInfos.length = 0;
    menuInfos.forEach((menu) => {
      this.menuInfos.push(menu);
    });
    this.menuSubject.next(this.menuInfos);
  }

  _bindTtlbind : any = null;

  /**
   * 로그인 사용자 정보 다시 읽기
   *
   * @returns {Promise<UserVo>}
   */
  public reloadUserInfo(): Promise<UserVo> {
    if (this._bindTtlbind !== null) {
      window.setTimeout(this._bindTtlbind);
    }
    return new Promise<UserVo>((resolve) => {
      if (this.isNotNullEmpty(this.sessToken)) {
        this.getView("refreshToken").then(tokenInfo => {
          if (this.sessToken !== tokenInfo.accessToken) {
            this.sessToken = tokenInfo.accessToken;
            this.settings.setValue("sessToken", this.sessToken);
          }
          this.menuInfos.length = 0;
          this.setMenuInfos(TMP_NAVIGATION);
          const user = tokenInfo.user;
          this.setUser({
            userNm: user.userNm,
            empNo: user.empNo,
            userId: user.userId,
            lognTyCd : user.lognTyCd,
          });
          resolve(this.getUser());
          if (tokenInfo.ttl > 0) {
            this._bindTtlbind = window.setTimeout(() => {
              this.reloadUserInfo();
              console.log('reload ttl');
            }, tokenInfo.ttl - 5*60000);
          }
        }).catch(() => {
          this.setUser(null);
          resolve(this.getUser());
        });;
      } else {
        this.setUser(null);
        resolve(this.getUser());
      }
    })

  }

  /**
   * 토큰 존재 여부
   *
   * @returns {boolean}
   */
  public hasToken(): boolean {
    return this.sessToken != null && this.sessToken != "";
  }

  /**
   * 로그인 페이지 이동
   *
   */
  public goLogin() {
    this.changeRouter("/login");
  }

  /**
   * string 으로 부터 Date 가져오기
   *
   * @param {string} dateTime
   * @returns {Date}
   */
  getDateFromString(dateTime: string): Date | null {
    if (dateTime) {
      return moment(dateTime).toDate();
    } else {
      return null;
    }
  }

  /**
   * Date 로 부터 string 가져오기
   *
   * @param {Date} dateTime
   * @param {string} [format=""]
   * @returns {string}
   */
  getStringFromDate(dateTime: Date, format: string = ""): string | null {
    if (dateTime) {
      switch (format) {
        case "full":
          return moment(dateTime).format("YYYY/MM/DD HH:mm");
        case "fromNow":
          return moment(dateTime).fromNow();
        case "short":
          return moment(dateTime).format("MM/DD");
        case "time":
          return moment(dateTime).format("HH:mm");
        case "date":
          return moment(dateTime).format("YYYY/MM/DD");
        case "":
        case null:
          return dateTime.toISOString();
        default:
          return moment(dateTime).format(format);
      }
    }
    return null;
  }

  /**
   * 로케일 가져오기
   *
   * @returns {string}
   */
  getLocale(): string {
    return this.locale;
  }

  /**
   * 로케일 리로드 하기
   *
   * @param string locale
   */
  reloadLocale(locale: string) {
    this.translate.resetLang(locale);
    this.translate.reloadLang(locale).subscribe(() => {
      if (this.locale === locale) {
        if (this.locale === "ko") {
          this.translate.use("en").subscribe(() => {
            this.translate.use(locale);
          });
        } else {
          this.translate.use("ko").subscribe(() => {
            this.translate.use(locale);
          });
        }
      }
    });
  }

  /**
   * 로케일 변경하기
   *
   * @param string locale
   */
  changeLocale(locale: string) {
    switch (locale) {
      case "ko":
      case "cn":
      case "jp":
      case "en":
        this.translate.use("en");
        this.settings.setValue("locale", "en");
        this.localeSubject.next("en");
        break;
    }
  }

  /**
   * 배열값 다시 초기화 하기
   *
   * @param {string[]} oldValue
   * @param {string[]} [newValue=[]]
   */
  protected changeArray(oldValue: string[], newValue: string[] = []) {
    if (oldValue != null) {
      oldValue.splice(0, oldValue.length);
      newValue.forEach((code) => {
        oldValue.push(code);
      });
    }
  }

  /**
   * 라우터 변경 구독기
   *
   * @private
   * @type {Subscription}
   */
  protected _routerObservableSubscriptions?: Subscription;

  /**
   * 로케일에 해당하는 문자열 가져오기
   *
   * @private
   * @param {string[]} keys
   * @returns {Promise<{ [key: string]: string }>}
   */
  protected _getLocaleString(
    keys: string[],
    interpolateParams?: Object
  ): Promise<{ [key: string]: string }> {
    return new Promise<{ [key: string]: string }>((resolve, reject) => {
      this.translate.get(keys, interpolateParams).subscribe((values) => {
        resolve(values);
      });
    });
  }

  /**
   * 로케일에 해당하는 문자열 가져오기
   *
   * @param {string[]} keys
   * @returns {Promise<{ [key: string]: string }>}
   */
  getLocaleString(
    keys: string[],
    interpolateParams?: Object
  ): Promise<{ [key: string]: string }> {
    return this._getLocaleString(keys, interpolateParams);
  }

  /**
   * Gets locale message
   *
   * @param msgKey
   * @param [interpolateParams]
   * @returns locale message
   */
  getLocaleMessage(
    msgKey: string,
    interpolateParams?: Object
  ): Promise<string> {
    return new Promise<string>((resolve) => {
      this._getLocaleString([msgKey], interpolateParams).then((values) => {
        let text = values[msgKey];
        resolve(text);
      });
    });
  }

  /**
   * Gets locale message
   *
   * @param msgKeys
   * @param [interpolateParams]
   * @returns locale message
   */
  getLocaleMessages(
    msgKeys: string[],
    interpolateParams?: Object
  ): Promise<{ [key: string]: string }> {
    return new Promise<{ [key: string]: string }>((resolve) => {
      this._getLocaleString(msgKeys, interpolateParams).then((values) => {
        resolve(values);
      });
    });
  }

  /**
   * 코드 정보 가져오기
   *
   * @param {string[]} itemKeys
   * @returns {Promise<{ [key: string]: CodeVo[] }>}
   */
  getCodeVos(itemKeys: string[]): Promise<{ [key: string]: CodeVo[] }> {
    const promise = new Promise<{ [key: string]: CodeVo[] }>(
      (resolve, reject) => {
        const resultCodes: { [key: string]: CodeVo[] } = {};
        let loadedCnt = 0;
        const targetCnt = itemKeys.length;
        itemKeys.forEach((itemKey) => {
          this.getCodeVo(itemKey).then((codeVo) => {
            resultCodes[itemKey] = codeVo;
            loadedCnt++;
            if (loadedCnt >= targetCnt) {
              resolve(resultCodes);
            }
          });
        });
      }
    );
    return promise;
  }

  /**
   * 코드 정보 다시 읽기
   *
   * @param {string[]} itemKeys
   */
  getReloadCodeVos(itemKeys: string[]): void {
    itemKeys.forEach((itemKey) => {
      this.codeService.setCodeVo(itemKey, null);
    });
  }

  /**
   * 코드 정보 다시 읽기
   *
   * @param {string} itemKey
   * @param {string} loadKey
   * @returns {Promise<CodeVo[]>}
   */
  getReloadCodeVo(itemKey: string, loadKey: string): Promise<CodeVo[]> {
    this.codeService.setCodeVo(itemKey, null);
    return this.getCodeVo(loadKey);
  }

  /**
   * 코드 정보에서 로케일 값 가져오기
   *
   * @param {{ key: string, value: string }[]} localeCodes
   * @returns {Promise<{ [key: string]: CodeVo }>}
   */
  getCodeVoValues(
    localeCodes: { key: string; value: string }[]
  ): Promise<{ [key: string]: CodeVo }> {
    return new Promise<{ [key: string]: CodeVo }>((resolve) => {
      const result: { [key: string]: CodeVo } = {};
      const codeList: string[] = [];
      localeCodes.forEach((vo) => {
        if (vo.key && vo.value) {
          codeList.push(vo.key);
        }
      });
      if (codeList.length > 0) {
        this.getCodeVos(codeList).then((codeData) => {
          localeCodes.forEach((code) => {
            if (codeData[code.key]) {
              const voList = codeData[code.key];
              if (voList && voList.length) {
                const foundVo = voList.find((vo) => {
                  if (vo.id == code.value) {
                    return true;
                  } else {
                    return false;
                  }
                });
                if (foundVo != null) {
                  result[code.value] = foundVo;
                }
              }
            }
          });
          resolve(result);
        });
      } else {
        resolve(result);
      }
    });
  }

  /**
   * 코드 정보 가져오기
   *
   * @param {string} itemKey
   * @param {boolean} [isTreeCode=false]
   * @returns {Promise<CodeVo[]>}
   */
  getCodeVo(itemKey: string): Promise<CodeVo[]> {
    return new Promise<CodeVo[]>((resolve) => {
      const codeValue = this.codeService.getCodeVo(itemKey);
      if (this.isNullEmpty(codeValue)) {
        const tmpCodeValue: CodeVo[] = [];
        this.codeService.setCodeVo(itemKey, tmpCodeValue);
        this.getList(environment.codeUrl + itemKey).then(
          (items) => {
            tmpCodeValue.length = 0;
            items.forEach((item) => {
              tmpCodeValue.push(item);
            });
            this.codeService.setCodeVo(itemKey, tmpCodeValue);
            resolve(tmpCodeValue);
          },
          () => {}
        );
      } else {
        if (codeValue.length === 0) {
          setTimeout(() => {
            resolve(codeValue);
          }, 1000);
        } else {
          resolve(codeValue);
        }
      }
    });
  }

  /**
   * Text 를 HTML 로 전환해서 가져오기
   * 이미지 소스는 캐시 서버로 치환함
   *
   * @param {string} contents
   * @returns {string}
   */
  getContent2Html(contents: string): string {
    if (contents != null && contents.replace) {
      let htmlContents = contents
        .replace(/src="\/data\//gi, 'src="' + environment.imageUrl)
        .replace(/src='\/data\//gi, "src='" + environment.imageUrl);
      if (
        htmlContents.indexOf("<BR") == -1 &&
        htmlContents.indexOf("<br") == -1 &&
        htmlContents.indexOf("<P") == -1 &&
        htmlContents.indexOf("<p") == -1 &&
        htmlContents.indexOf("<TABLE") == -1 &&
        htmlContents.indexOf("<table") == -1
      ) {
        htmlContents = htmlContents.trim().replace(/\n/gi, "<br>\n");
      }
      return htmlContents;
    }
    return "";
  }

  /**
   * HTML 을 전송을 위한 소스로 치환해서 가져오기
   * 이미지 소스는 자동으로 로컬 서버로 전환함
   *
   * @param {string} contents
   * @returns {string}
   */
  getHtml2Contents(contents: string): string {
    if (contents != null && contents.replace) {
      return contents
        .replace('src="' + environment.imageUrl, 'src="/data/')
        .replace("src='" + environment.imageUrl, "src='/data/");
    }
    return "";
  }

  /**
   * HTML 을 전송을 위한 소스로 치환해서 가져오기
   * 이미지 소스는 자동으로 로컬 서버로 전환함
   *
   * @param {string} contents
   * @returns {string}
   */
  getHtml2Text(contents: string): string {
    if (contents != null) {
      return contents
        .replace(/<br[ \/]*>/gi, "\n")
        .replace(/<\/?[a-zA-Z][^>]*>/gi, "");
    }
    return "";
  }

  /**
   * 이미지 URL 변환하기
   *
   * @param {string} imageInfo
   * @param {number} [width=0]
   * @param {number} [height=0]
   * @param {string} [thumbType=""]
   * @returns {string}
   */
  getImageUrl(
    imageInfo: string,
    width: number = 0,
    height: number = 0,
    thumbType: string = ""
  ): string {
    if (imageInfo != null && imageInfo.indexOf("#") > 0) {
      let [imgName, imgSize, imgType, imgUrl] = imageInfo.split("#");
      if (imgName != "" && imgSize != "0" && imgType.indexOf("image/") == 0) {
        if (width > 0 || height > 0) {
          return (
            environment.imageUrl +
            "thumb/" +
            width +
            "x" +
            height +
            "/" +
            imgUrl +
            "." +
            (thumbType != "" ? thumbType : "jpg")
          );
        } else {
          return environment.imageUrl + "" + imgUrl;
        }
      }
    }
    return "";
  }

  /**
   * 컨포넌트로 모달창 열기
   * 모달창에서 전달 값이 있는 경우 전달함
   *
   * @param {*} component
   * @param {*} [param]
   * @param {*} [extraParam]
   * @returns {Promise<any>}
   */
  openModalComponent(
    component: any,
    param?: any,
    extraParam?: any
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const onSelect = new EventEmitter<any>();
      onSelect.subscribe((data?: any) => {
        if (data != null) {
          resolve(data);
        } else {
          reject();
        }
      });
      this.openModal(
        component,
        {
          onSelect: onSelect,
          ...param,
          commonService: this,
        },
        extraParam
      );
    });
  }

  /**
   * Alert 열기
   *
   * @param messageHtml
   * @param title
   * @param [interpolateParams]
   * @returns alert
   */
  openAlert(
    messageHtml: string,
    title: string,
    interpolateParams?: Object
  ): Promise<void> {
    return new Promise<any>((resolve) => {
      this.getLocaleMessage(messageHtml, interpolateParams).then((text) => {
        DEV_DIALOG.alert(
          text,
          this.isNotNullEmpty(title) ? title : "Info"
        ).then(() => {
          resolve(null);
        });
      });
    });
  }

  /**
   * Confirm 열기
   *
   * @param messageHtml
   * @param title
   * @param [interpolateParams]
   * @returns confirm
   */
  openConfirm(
    messageHtml: string,
    title: string,
    interpolateParams?: Object
  ): Promise<boolean> {
    return new Promise<any>((resolve) => {
      this.getLocaleMessage(messageHtml, interpolateParams).then((text) => {
        DEV_DIALOG.confirm(
          text,
          this.isNotNullEmpty(title) ? title : "Confirm"
        ).then((result) => {
          resolve(result);
        });
      });
    });
  }

  /**
   * Opens custom
   *
   * @param messageHtml
   * @param title
   * @param buttons
   * @param [interpolateParams]
   * @returns custom
   */
  openCustom(
    messageHtml: string,
    title: string,
    buttons: ButtonVo[],
    interpolateParams?: Object
  ): Promise<any> {
    return new Promise<any>((resolve) => {
      this.getLocaleMessage(messageHtml, interpolateParams).then((text) => {
        DEV_DIALOG.custom({
          title: this.isNotNullEmpty(title) ? title : undefined,
          messageHtml: messageHtml,
          buttons: buttons,
        })
          .show()
          .then((dialogResult: any) => {
            resolve(dialogResult.value);
          });
      });
    });
  }

  /**
   * Opens notify
   *
   * @param message
   * @param [type]
   * @param [displayTime]
   * @param [interpolateParams]
   */
  openNotify(
    message: NotifyVo | string,
    type: "info" | "warning" | "error" | "success" = "info",
    displayTime: number = 500,
    interpolateParams?: Object,
    isBottom?: boolean
  ) {
    if (typeof message === "string") {
      this.getLocaleMessage(message, interpolateParams).then((text) => {
        if (isBottom && this.appComponent !== null) {
          this.appComponent.setBottomMessage(text, type);
        } else {
          notify(text, type, displayTime);
        }
      });
    } else {
      this.getLocaleMessage(message.message, interpolateParams).then((text) => {
        message.message = text;
        if (isBottom && this.appComponent !== null) {
          this.appComponent.setBottomMessage(message.message, type);
        } else {
          notify(
            {
              message: message.message,
              width: message.width || 200,
              shading: message.shading || false,
            },
            type,
            displayTime
          );
        }
      });
    }
  }

  /**
   * 모달장 열기
   *
   * @param {*} component
   * @param {*} [param]
   * @param {*} [extraParam]
   * @returns {BsModalRef}
   */
  openModal(component: any, param?: any, extraParam?: any): BsModalRef {
    return this.modalService.show(component, {
      initialState: param,
      ...extraParam,
    });
  }

  /**
   * 홈으로 이동하기
   */
  goHome() {
    this.changeRouter("/uw/cust/uw1000");
  }

  /**
   * 세션 토큰 정보
   *
   * @private
   * @type {string}
   */
  protected sessToken: string = null;

  /**
   * 세션 토큰 가져오기
   *
   * @returns {string}
   */
  public getSessToken(): string {
    return this.sessToken;
  }

  /**
   * 세션 토큰 가져오기
   *
   * @returns {string}
   */
  public setSessToken(sessToken: string): Promise<void> {
    this.sessToken = sessToken;
    this.settings.setValue("sessToken", this.sessToken);
    return new Promise((resolve) => {
      this.reloadUserInfo().then(() => {
        resolve();
      });
    });
  }

  /**
   * 리케스트 헤드 옵션 가져오기
   *
   * @private
   * @returns {any}
   */
  protected getRequestOptionsToken(): any {
    return {
      headers: new HttpHeaders({ Authorization: "Bearer " + this.sessToken }),
      observe: "response",
    };
  }

  /**
   * 리쿼스트 옵션 가져오기
   *
   * @param {string} [url]
   * @returns {Promise<any>}
   */
  getRequestOptions(url: string = ""): Promise<any> {
    this.lastErrorCode = 0;
    return new Promise((resolve) => {
      resolve(this.getRequestOptionsToken());
    });
  }

  /**
   * 리케스트 옵션 헤드 없이 가져오기
   *
   * @param {string} [url]
   * @returns {any}
   */
  getRequestOptionsUnToken(url?: string): any {
    if (this.isNullEmpty(this.sessToken)) {
      return null;
    } else {
      return this.getRequestOptionsToken();
    }
  }

  /**
   * 마지막 로드 로케일
   *
   * @type {string}
   */
  public lastLocale?: string;

  /**
   * 마지막 오류 메세지 코드
   */
  lastErrorCode: number = 0;

  /**
   * 오류 확인
   *
   * @private
   * @param {*} error
   */
  protected checkError(error: any): void {
    if (error != null) {
      console.log(error);
      if (this.lastErrorCode !== error.code) {
        this.lastErrorCode = error.code;
        if (error.reason) {
          this.openNotify(error.reason, "error", 3000);
        } else {
          this.openNotify("ERROR_MSG_UNKNOWN", "error");
        }
        switch (error.code) {
          case 800:
            this.changeRouter("/login");
            break;
          case 900:
          case 465:
          case 464:
            if (!this.router.url.startsWith("/login")) {
              this._settingLoaded = false;
              this.setUser(null);
              this.sessToken = null;
              this.settings.setValue("sessToken", "");
              this.changeRouter("/login");
            }
            break;
          case 465:
          case 464:
            this.setUser(null);
            this.changeRouter("/login");
            break;
          default:
            break;
        }
      }
    }
  }

  /**
   * 라우터 변경하기
   *
   * @param {string} path
   * @param {NavigationExtras} extras
   */
  changeRouter(path: string, extras?: NavigationExtras) {
    if (path === "/loading" || path === "/login") {
      extras = { fragment: window.location.pathname + window.location.search };
    }
    switch (path) {
      case "/loading":
      case "/login":
        extras.replaceUrl = true;
        break;
      default:
        break;
    }
    switch (path) {
      case "/logout":
        this.setLogout();
        break;
      default:
        if (this.isNotNullEmpty(extras)) {
          this.router.navigate([path], extras);
        } else {
          this.router.navigateByUrl(path);
        }
        break;
    }
  }

  /**
   * 페이징 가져오기
   *
   * @param {string} endpoint
   * @param {*} [params]
   * @param {number} [offset=0]
   * @param {number} [limit=10]
   * @param {string} [orderBy=""]
   * @param {*} [formFixSearch={}]
   * @param {boolean} [detailOpen=false]
   * @returns {Promise<PagingVo<any>>}
   */
  getPaging(
    endpoint: string,
    params?: any,
    offset: number = 0,
    limit: number = 10,
    orderBy: string = "",
    formFixSearch: any = {}
  ): Promise<PagingVo<any>> {
    return new Promise((resolve, reject) => {
      const searchData = Object.assign(
        {},
        params || {},
        {
          offset: offset,
          limit: limit,
          orderBy: orderBy,
        },
        formFixSearch
      );
      this.getRequestOptions("").then((requestOption) => {
        this.api.get(endpoint, searchData, requestOption).then(
          (enItem) => {
            const item = this.rsaService.decrypt(enItem);
            if (item && item.items instanceof Array) {
              const total = item.total;
              const page = Math.ceil(offset / limit) + 1;
              const totalPage = Math.ceil(total / limit);
              const items: any[] = item.items as any[];
              resolve({
                currPage: item.currPage,
                hasMore: item.hasMore,
                perPage: item.perPage,
                total: total,
                limit: limit,
                offset: offset,
                page: page,
                totalPage: totalPage,
                items: items,
                searchVo: item.searchVo,
              });
            } else {
              resolve({
                currPage: 0,
                hasMore: false,
                perPage: item.perPage,
                total: 0,
                limit: 0,
                offset: 0,
                page: 0,
                totalPage: 0,
                items: [],
                searchVo: null,
              });
            }
          },
          (error) => {
            this.checkError(error);
            reject(error);
          }
        );
      });
    });
  }

  /**
   * 목록 가져오기
   *
   * @param {string} endpoint
   * @param {*} [params]
   * @param {number} [offset=0]
   * @param {number} [limit=10]
   * @returns {Promise<any[]>}
   */
  getList(
    endpoint: string,
    params?: any,
    offset: number = 0,
    limit: number = 10
  ): Promise<any[]> {
    return new Promise((resolve, reject) => {
      if (this.isNullEmpty(params)) {
        params = {};
      }
      params.page = offset || 1;
      params.limit = limit;
      this.getRequestOptions(endpoint).then((requestOption) => {
        this.api.get(endpoint, params, requestOption).then(
          (enItem) => {
            const items = this.rsaService.decrypt(enItem);
            if (items && items instanceof Array) {
              resolve(items);
            } else {
              resolve([]);
            }
          },
          (error) => {
            this.checkError(error);
            reject(error);
          }
        );
      });
    });
  }

  /**
   * 포스트 방식으로 데이타 가져오기
   *
   * @param {string} endpoint
   * @param {*} [params]
   * @param {boolean} [isSecure=false]
   * @returns {Promise<any>}
   */
  getPostView(
    endpoint: string,
    params?: any,
    isSecure: boolean = false
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getRequestOptions(endpoint).then((requestOption) => {
        this.api
          .post(endpoint, this.getSecureParam(params, isSecure), requestOption)
          .then(
            (enItem) => {
              const item = this.rsaService.decrypt(enItem);
              if (item) {
                resolve(item);
              } else {
                resolve(null);
              }
            },
            (error) => {
              this.checkError(error);
              reject(error);
            }
          );
      });
    });
  }

  /**
   * 토큰 값으로 보기 가져오기
   *
   * @param {string} endpoint
   * @param {*} [params]
   * @returns {Promise<any>}
   */
  getView(
    endpoint: string,
    params?: any
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getRequestOptions().then((requestOption) => {
        this.api.get(endpoint, params, requestOption).then(
          (enItem) => {
            const item = this.rsaService.decrypt(enItem);
            if (item) {
              resolve(item);
            } else {
              resolve(null);
            }
          },
          (error) => {
            this.checkError(error);
            reject(error);
          }
        );
      });
    });
  }

  /**
   * 패치 정보 가져오기
   *
   * @param {string} endpoint
   * @param {*} params
   * @param {boolean} [isSecure=false]
   * @returns {Promise<boolean>}
   */
  getPatch(
    endpoint: string,
    params: any,
    isSecure: boolean = false
  ): Promise<boolean> {
    return new Promise((resolve) => {
      this.getRequestOptions(endpoint).then((requestOption) => {
        this.api
          .patch(endpoint, this.getSecureParam(params, isSecure), requestOption)
          .then(
            (enItem) => {
              const item = this.rsaService.decrypt(enItem);
              if (item != null && item) {
                resolve(true);
              } else {
                resolve(false);
              }
            },
            (error) => this.checkError(error)
          );
      });
    });
  }

  /**
   * 데이타 암호화 해서 가져오기
   *
   * @param {*} [params]
   * @param {boolean} [isSecure=false]
   * @returns {*}
   */
  getSecureParam(params?: any, isSecure: boolean = false): any {
    return isSecure && params != null
      ? this.rsaService.encrypt(params)
      : params;
  }

  /**
   * 삭제하기
   *
   * @param {string} endpoint
   * @returns {Promise<boolean>}
   */
  getDelete(endpoint: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.getRequestOptions(endpoint).then((requestOption) => {
        this.api.delete(endpoint, requestOption).then(
          (enItem) => {
            const item = this.rsaService.decrypt(enItem);
            if (item != null && item) {
              resolve(true);
            } else {
              resolve(false);
            }
          },
          (error) => this.checkError(error)
        );
      });
    });
  }

  /**
   * 포스트 방식으로 멀티 데이타 Insert, Delete, Update
   *
   * @param endpoint
   * @param formValue
   * @param pkList
   * @returns post crud
   */
  public getPostCud(
    endpoint: string,
    formValue: CudItemListVo<any>,
    pkList?: string | string[]
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getRequestOptions(endpoint).then((requestOption) => {
        let params: CudItemListVo<any> = [];
        const deleteKeys: string[] = [];
        if (this.isNotNullEmpty(pkList)) {
          if (Array.isArray(pkList)) {
            pkList.forEach((key) => {
              if (key !== "") {
                deleteKeys.push(key);
              }
            });
          } else {
            deleteKeys.push(pkList);
          }
        }
        formValue.forEach((value) => {
          const itemValue = Object.assign({}, value.item);
          switch (value.type) {
            case "insert":
              deleteKeys.forEach((key) => {
                delete itemValue[key];
              });
              params.push({ type: "insert", item: itemValue });
              break;
            case "delete":
            case "update":
              params.push({ type: value.type, item: itemValue });
              break;
          }
        });
        this.api.post(endpoint, params, requestOption).then(
          (enItem) => {
            const item = this.rsaService.decrypt(enItem);
            if (item) {
              resolve(item);
            } else {
              resolve(null);
            }
          },
          (error) => {
            this.checkError(error);
          }
        );
      });
    });
  }

  /**
   * 데이타 업데이트 하기
   *
   * @param {string} endpoint
   * @param {*} [params]
   * @param {boolean} [isSecure=false]
   * @returns {Promise<boolean>}
   */
  getUpdate(
    endpoint: string,
    params?: any,
    isSecure: boolean = false
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.getRequestOptions(endpoint).then((requestOption) => {
        this.api
          .post(endpoint, this.getSecureParam(params, isSecure), requestOption)
          .then(
            (enItem) => {
              const item = this.rsaService.decrypt(enItem);
              if (item != null && item) {
                resolve(true);
              } else {
                resolve(false);
              }
            },
            (error) => this.checkError(error)
          );
      });
    });
  }

  /**
   * 데이타 생성하기
   *
   * @param {string} endpoint
   * @param {*} [params]
   * @param {boolean} [isSecure=false]
   * @returns {Promise<any>}
   */
  getCreate(
    endpoint: string,
    params?: any,
    isSecure: boolean = false
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getRequestOptions(endpoint).then((requestOption) => {
        this.api
          .post(endpoint, this.getSecureParam(params, isSecure), requestOption)
          .then(
            (enItem) => {
              const item = this.rsaService.decrypt(enItem);
              if (item != null) {
                resolve(item);
              } else {
                resolve(null);
              }
            },
            (error) => this.checkError(error)
          );
      });
    });
  }

  /**
   * 특정 아이디로 스크롤 이동
   *
   * @param {string} id
   * @param {("auto" | "instant" | "smooth")} [behavior="smooth"]
   * @param {number} [afterTime=50]
   */
  scrollTo(
    id: string,
    behavior: "auto" | "instant" | "smooth" = "smooth",
    afterTime: number = 50
  ) {
    if (id != null) {
      setTimeout(() => {
        const ele: any = document.getElementById(id);
        if (ele != null) {
          ele.scrollIntoView({ behavior: behavior });
        }
      }, afterTime);
    }
  }

  /**
   * 파일 다운 받기
   *
   * @param {string} fileStr
   */
  getFileDownload(fileStr: string) {
    const [fileName, , fileType, fileServer] = fileStr.split("#");
    this.getPostView(environment.downloadUrl, {
      fileName: fileName,
      fileServer: fileServer,
      fileType: fileType,
    }).then((result) => {
      this.getFileDownloadVo(result);
    });
  }

  /**
   * 파일 다운 받기
   *
   * @param {string} result
   */
  getFileDownloadVo(result: any) {
    try {
      if (result != null && result.fileData != null) {
        if (result.fileData.indexOf("data:") !== 0) {
          result.fileData =
            "data:" + result.fileType + ";base64," + result.fileData;
        }
        const blob = this.dataURLtoBlob(result.fileData);
        var tempUrl = window.URL.createObjectURL(blob);
        let link = document.createElement("a");
        link.setAttribute("download", result.fileName);
        link.setAttribute("href", tempUrl);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // alert("null");
      }
    } catch (ex) {
      // alert(ex);
    }
  }

  /**
   * Data 를 Blob 로 가져오기
   *
   * @private
   * @param {string} dataurl
   * @returns {Blob}
   */
  protected dataURLtoBlob(dataurl: string): Blob {
    let arr: any = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  /**
   * 윈도우 열기
   *
   * @param {string} url
   * @param {string} [urlType]
   * @returns
   */
  openWindow(url: string, urlType?: string) {
    if (url != null && url.length > 3) {
      switch (urlType) {
        case "tel":
        case "TEL":
          window.location.href =
            "tel:" + url.replace("-000-", "-").replace("-", "");
          break;
        case "email":
        case "EMAIL":
          window.location.href = "mailto:" + url;
          break;
        default:
          window.open(url, "_system");
          break;
      }
    }
    return false;
  }

  /**
   * 사용자 정보 설정하기
   *
   * @param {UserVo} userInfo
   * @returns
   */
  checkUserLogin() {
    this.loginSubject.next(this.userInfo);
  }
}
