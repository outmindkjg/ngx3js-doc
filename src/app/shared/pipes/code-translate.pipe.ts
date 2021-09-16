import { OnDestroy, Pipe, PipeTransform } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { AbstractBasePipe } from "../abstract.base";
import { CodeVo } from "./../common.interface";
import { CommonService } from "./../services/common.service";

/**
 * 코드 변역 서비스 파이프
 *
 * @export
 * @class CodeTranslatePipe
 * @implements {PipeTransform}
 * @implements {OnDestroy}
 */
@Pipe({
  name: "codeTranslate",
  pure: false
})
export class CodeTranslatePipe extends AbstractBasePipe implements PipeTransform, OnDestroy {
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
	 * 변환 실행하기
	 *
	 * @param {CodeVo} codeVo
	 * @returns {string}
	 */
  transform(codeVo: CodeVo): string {
    if (codeVo && codeVo.label !== null && codeVo.label !== "") {
      return codeVo.label || '';
    } else {
      return "";
    }
  }

	/**
	 * Cleanup just before Angular destroys the directive/component.
	 */
  ngOnDestroy() {
    this.localeSubscription.unsubscribe();
    super.ngOnDestroy();
  }
}
