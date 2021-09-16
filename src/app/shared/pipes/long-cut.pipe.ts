import { Pipe, PipeTransform } from "@angular/core";
import { AbstractBasePipe } from "../abstract.base";

/**
 * 글자 자르기 파이프
 *
 * @export
 * @class LongCutPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: "longCut"
})
export class LongCutPipe extends AbstractBasePipe implements PipeTransform {
	/**
	 * 글자 자르기 실행하기
	 *
	 * @param {string} text
	 * @param {number} [maxLen=50]
	 * @param {boolean} [isHtml=false]
	 * @returns {string}
	 */
  transform(text: string, maxLen: number = 50, isHtml: boolean = false): string {
    if (text) {
      if (isHtml) {
        text = text
          .replace(/(<([^>]+)>)/gi, "")
          .replace(/&nbsp;/g, "")
          .replace(/&gt;/g, ">")
          .replace(/&lt;/g, "<")
          .replace(/&quot;/g, '"');
      }
      if (text.length > maxLen) {
        return text.substr(0, maxLen) + "...";
      }
    }
    return text;
  }
}
