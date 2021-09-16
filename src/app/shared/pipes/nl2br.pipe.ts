import { Pipe, PipeTransform } from "@angular/core";
import { AbstractBasePipe } from "../abstract.base";

/**
 * HTML & TEXT 에 BR 을 넣어서 보여주기
 *
 * @export
 * @class Nl2brPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: "nl2br"
})
export class Nl2brPipe extends AbstractBasePipe implements PipeTransform {
	/**
	 * 변환 실행하기
	 *
	 * @param {string} text
	 * @param {boolean} [useHtml=true]
	 * @param {boolean} [transSpecial=true]
	 * @returns {string}
	 */
  transform(text: string, useHtml: boolean = true, transSpecial: boolean = true): string {
    let html = transSpecial
      ? text
        .replace(/&/g, "&amp;")
        .replace(/>/g, "&gt;")
        .replace(/</g, "&lt;")
        .replace(/"/g, "&quot;")
      : text;
    if (useHtml) {
      return html.replace(/\n/gi, "<br/>");
    } else {
      return html;
    }
  }
}
