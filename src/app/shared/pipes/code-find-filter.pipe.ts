import { Pipe, PipeTransform } from "@angular/core";
import { AbstractBasePipe } from "../abstract.base";
import { CodeVo } from "./../common.interface";

/**
 * 코드 검색 파이프
 *
 * @export
 * @class CodeFindFilterPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: "codeFindFilter"
})
export class CodeFindFilterPipe extends AbstractBasePipe implements PipeTransform {
	/**
	 * 변환 실행하기
	 *
	 * @param {CodeVo[]} codes
	 * @param {string} [findme]
	 * @returns {CodeVo[]}
	 */
  transform(codes: CodeVo[], findme?: string): CodeVo[] {
    if (findme === null || findme == undefined || findme === "") {
      return codes;
    } else {
      let findmes: string[] = findme.toLowerCase().split(" ");
      return codes.filter(item => {
        const keyword = (item.id + " " + item.label).toLowerCase();
        for (let i = 0; i < findmes.length; i++) {
          if (findmes[i] != undefined && findmes[i] !== "") {
            if (keyword.indexOf(findmes[i]) === -1) {
              return false;
            }
          }
        }
        return true;
      });
    }
  }
}
