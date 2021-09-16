import { Pipe, PipeTransform } from "@angular/core";
import { AbstractBasePipe } from "../abstract.base";
import { CodeService } from "./../services/code.service";
import { CommonService } from "./../services/common.service";

/**
 * 코드 값 파이프
 *
 * @export
 * @class CodeValuePipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: "codeValue"
})
export class CodeValuePipe extends AbstractBasePipe implements PipeTransform {
	/**
	 * 코드 서비스
	 *
	 * @private
	 * @type {CodeService}
	 */
  protected codeService: CodeService;

	/**
	 * Creates an instance of BoardComponent.
	 *
	 * @constructor
	 * @param {CommonService} commonService
	 */
  constructor(commonService: CommonService) {
    super();
    this.codeService = commonService.codeService;
  }

	/**
	 * 변환 실행하기
	 *
	 * @param {*} value
	 * @param {string} itemKey
	 * @returns {*}
	 */
  transform(value: any, itemKey: string): any {
    if (value) {
      const itemList = this.codeService.getCodeVo(itemKey);
      if (itemList) {
        const findVo = itemList.find(item => {
          return item.id === value;
        });
        if (findVo != null) {
          return findVo.label;
        }
      }
    }
    return value;
  }
}
