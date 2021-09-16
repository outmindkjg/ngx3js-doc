import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { AbstractBasePipe } from "../abstract.base";

/**
 * 안전 HTML 파이프
 *
 * @export
 * @class SafeHtmlPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: "safeHtml"
})
export class SafeHtmlPipe extends AbstractBasePipe implements PipeTransform {
	/**
	 * Creates an instance of SafeHtmlPipe.
	 *
	 * @constructor
	 * @param {DomSanitizer} sanitized
	 */
  constructor(protected sanitized: DomSanitizer) {
    super();
  }

	/**
	 * 변환 실행하기
	 *
	 * @param {string} value
	 * @returns {SafeHtml}
	 */
  transform(value: string): SafeHtml {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
