import { Pipe, PipeTransform } from "@angular/core";
import { CodeVo } from "./../common.interface";
import { CommonService } from "./../services/common.service";
import { AbstractBasePipe } from "../abstract.base";

/**
 * 코드 값 로케일 파이프
 *
 * @export
 * @class CodeValueLocalePipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: "codeValueLocale"
})
export class CodeValueLocalePipe extends AbstractBasePipe implements PipeTransform {
	/**
	 * Creates an instance of ListFooterComponent.
	 *
	 * @constructor
	 * @param {CommonService} commonService
	 */
  constructor(protected commonService: CommonService) {
    super();
  }

	/**
	 * 변환 실행하기
	 *
	 * @param {*} value
	 * @param {string} itemKey
	 * @returns {CodeVo}
	 */
  transform(value: any, itemKey: string): CodeVo | null {
    if (value) {
      const codeVo: CodeVo = {};
      this.commonService.getCodeVo(itemKey).then(itemList => {
        if (itemList) {
          const findVos = itemList.filter(item => {
            return item.id === value;
          });

          if (findVos && findVos.length > 0) {
            Object.assign(codeVo, findVos[0]);
          }
        }
      });
      return codeVo;
    }
    return null;
  }
}
