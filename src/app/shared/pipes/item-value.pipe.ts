import { Pipe, PipeTransform } from "@angular/core";
import { AbstractBasePipe } from "../abstract.base";

/**
 * 파일 크기 파이프
 *
 * @export
 * @class FileSizePipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: "itemValue"
})
export class ItemValuePipe extends AbstractBasePipe implements PipeTransform {
	/**
	 * 변환 실행하기
	 *
	 * @param {number} value
	 * @returns {string}
	 */
  transform(item: any, itemKey: string, modDate: string = '') {
    if (itemKey.indexOf(".")) {
      const itemKeyList = itemKey.split(".");
      while (item && itemKeyList.length > 0) {
        const key = itemKeyList.shift() || '';
        item = item[key];
      }
      return item;
    } else {
      if (item !== null && item !== undefined) {
        return item[itemKey];
      } else {
        return null;
      }
    }
  }
}
