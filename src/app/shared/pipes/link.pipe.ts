import { Pipe, PipeTransform } from "@angular/core";
import { AbstractBasePipe } from "../abstract.base";

/**
 * 링크 파이프
 *
 * @export
 * @class LinkPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: "link"
})
export class LinkPipe extends AbstractBasePipe implements PipeTransform {
	/**
	 * 링크 변환하기
	 *
	 * @param {string} value
	 * @param {string} link
	 * @param {boolean} [isSelf=false]
	 * @returns {string}
	 */
  transform(value: string, link: string, isSelf: boolean = false): string {
    if (value && value != undefined && value != null && value !== "" && value.indexOf("href='#'") > -1) {
      return value.replace("href='#'", 'href="' + link + '" ' + (isSelf ? "" : ' target="_blank" ') + "");
    } else {
      return value;
    }
  }
}
