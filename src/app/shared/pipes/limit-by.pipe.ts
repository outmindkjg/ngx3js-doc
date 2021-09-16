import { Pipe, PipeTransform } from "@angular/core";
import { AbstractBasePipe } from "../abstract.base";

/**
 * 특정 갯수로 잘라서 가져오기
 *
 * @export
 * @class LimitByPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: "limitBy"
})
export class LimitByPipe extends AbstractBasePipe implements PipeTransform {
	/**
	 * 변환하기
	 *
	 * @template T
	 * @param {T[]} data
	 * @param {number} length
	 * @param {number} [rowNo=4]
	 * @param {boolean} [useRandom=false]
	 * @returns {any[]}
	 */
  transform<T>(data: T[], length: number, rowNo: number = 4, useRandom: boolean = false): any[] {
    let result: T[] = [];
    if (length > 0) {
      if (rowNo === 0) {
        rowNo = length;
      }
      if (useRandom && data.length > 1) {
        for (var i = data.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = data[i];
          data[i] = data[j];
          data[j] = temp;
        }
      }
      data.forEach(item => {
        if (result.length < rowNo) {
          result.push(item);
        }
      });
    }
    return result;
  }
}
