import { OnDestroy, Pipe, PipeTransform } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { CommonService } from "./../services/common.service";
import { AbstractBasePipe } from "../abstract.base";

/**
 * 전화번호 한국어 로케일시 국가번호 제거
 *
 * @export
 * @class TelShortPipe
 * @implements {PipeTransform}
 * @implements {OnDestroy}
 */
@Pipe({
  name: "telShort"
})
export class TelShortPipe extends AbstractBasePipe implements PipeTransform, OnDestroy {
	/**
	 * 현재 사용 중인 로케일
	 *
	 * @private
	 * @type {string}
	 */
  protected locale: string = "ko";

	/**
	 * 로케일 구독
	 *
	 * @private
	 * @type {Subscription}
	 */
  protected localeSubscription: Subscription;

	/**
	 * Creates an instance of InputEditorComponent.
	 *
	 * @constructor
	 * @param {CommonService} commonService
	 */
  constructor(commonService: CommonService) {
    super();
    this.localeSubscription = commonService.subscribe("locale").subscribe(locale => {
      this.locale = locale;
    });
    this.locale = commonService.getLocale();
  }

	/**
	 * 변환하기
	 *
	 * @param {string} telNo
	 * @returns {string}
	 */
  transform(telNo: string): string {
    if (telNo && telNo != undefined && telNo !== null && telNo !== "" && telNo.length > 5) {
      if (telNo.indexOf("+82") === 0 && this.locale === "ko") {
        telNo = telNo.replace("+82-000-", "").replace("+82-", "");
      } else {
        let telInfo = telNo.split("-");
        if (telInfo.length > 2 && telInfo[0].charAt(0) === "+" && telInfo[1].charAt(0) === "0") {
          telInfo[1] = telInfo[1].substr(1);
        }
        if (telInfo[1] === "00") {
          telNo = telInfo[0] + "-" + telInfo[2] + "-" + telInfo[3];
        } else {
          telNo = telInfo.join("-");
        }
      }
    }
    return telNo;
  }

	/**
	 * Cleanup just before Angular destroys the directive/component.
	 */
  ngOnDestroy() {
    this.localeSubscription.unsubscribe();
    super.ngOnDestroy();
  }
}
