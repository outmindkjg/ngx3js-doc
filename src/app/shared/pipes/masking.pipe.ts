import { OnDestroy, Pipe, PipeTransform } from "@angular/core";
import { AbstractBasePipe } from "../abstract.base";

/**
 * 마스킹 데이타 제거
 *
 * @export
 * @class MaskingDataPipe
 * @implements {PipeTransform}
 * @implements {OnDestroy}
 */
@Pipe({
  name: "masking"
})
export class MaskingDataPipe extends AbstractBasePipe implements PipeTransform, OnDestroy {
	/**
	 * 변환하기
	 *
	 * @param {string} str
	 * @returns {string}
	 */
  transform(str: string): string {
    if (str != null && str != "" && str.indexOf("#") > 0) {
      return str.substr(0, str.indexOf("#"));
    }
    return str;
  }

	/**
	 * Cleanup just before Angular destroys the directive/component.
	 */
  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
