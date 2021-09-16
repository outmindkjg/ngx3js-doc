import { CommonService } from "./../services/common.service";
import { Pipe, PipeTransform } from "@angular/core";
import { AbstractBasePipe } from "../abstract.base";

/**
 * 가격 파이프
 *
 * @export
 * @class PricePipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: "price"
})
export class PricePipe extends AbstractBasePipe implements PipeTransform {
	/**
	 * 시스템 사용 통화
	 *
	 * @private
	 * @type {string}
	 */
  protected baseCurrency: string = "KRW";

	/**
	 * Creates an instance of PricePipe.
	 *
	 * @constructor
	 * @param {CommonService} commonService
	 */
  constructor() {
    super();
  }

	/**
	 * 변환 실행하기
	 *
	 * @param {number} value
	 * @param {*} [args]
	 * @returns {string}
	 */
  transform(value: number, args?: any): string {
    if (value && (value !== 0 || args == 'showzero')) {
      if (args === "fixkrw") {
        return "￦ " + this.numberWithCommas(value, 0);
      }
      switch (this.baseCurrency) {
        case "USD":
          return "$ " + this.numberWithCommas(value, 2);
        case "CNY":
          return "Ұ " + this.numberWithCommas(value, 1);
        case "EUR":
          return "€ " + this.numberWithCommas(value, 2);
        case "JPY":
          return "¥ " + this.numberWithCommas(value, 1);
        case "KRW":
        default:
          return "￦ " + this.numberWithCommas(value);
      }
    }
    return "-";
  }

	/**
	 * 가격에 콤마 넣어서 가져오기
	 *
	 * @private
	 * @param {number} x
	 * @param {number} [fractionDigits=0]
	 * @returns {string}
	 */
  protected numberWithCommas(x: number, fractionDigits: number = 0): string {
    return x.toFixed(fractionDigits).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
