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
  name: "fileSize"
})
export class FileSizePipe extends AbstractBasePipe implements PipeTransform {
	/**
	 * 변환 실행하기
	 *
	 * @param {number} value
	 * @returns {string}
	 */
  transform(value: number): string {
    if (value > 1024 * 1024) {
      return (value / (1024 * 1024)).toFixed(2) + " Mb";
    } else if (value > 1024) {
      return (value / 1024).toFixed(2) + " Kb";
    } else {
      return value.toString() + " b";
    }
  }
}
