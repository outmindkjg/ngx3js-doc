import { CommonService } from "./../services/common.service";
import { Pipe, PipeTransform } from "@angular/core";
import { AbstractBasePipe } from "../abstract.base";

/**
 * 숫자 포맷 파이프
 *
 * @export
 * @class NumberFormatPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: "numberFormat"
})
export class NumberFormatPipe extends AbstractBasePipe implements PipeTransform {
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
  constructor(commonService: CommonService) {
    super();
  }

	/**
	 * 변환 실행하기
	 *
	 * @param {number} value
	 * @param {string} [showType]
	 * @returns {string}
	 */
  transform(value: number, showType?: string): string {
    if (value != null) {
      switch (showType) {
        case "P": {
          const numberValue = this.getNumberPair(value);
          return "<strong>" + numberValue.whole + "</strong><i>" + numberValue.decimal + "</i><small>%</small>";
        }
        case "EA": {
          return "<strong>" + this.numberWithCommas(value) + "</strong><small>EA</small>";
        }
        case "W": {
          switch (this.baseCurrency) {
            case "USD":
              return "<strong>" + this.numberWithCommas(value, 2) + "</strong><small>$</small>";
            case "CNY":
              return "<strong>" + this.numberWithCommas(value, 1) + "</strong><small>Ұ</small>";
            case "EUR":
              return "<strong>" + this.numberWithCommas(value, 1) + "</strong><small>€</small>";
            case "JPY":
              return "<strong>" + this.numberWithCommas(value, 1) + "</strong><small>¥</small>";
            case "KRW":
            default:
              return "<strong>" + this.numberWithCommas(value, 0) + "</strong><small>￦</small>";
          }
        }
        case "CRATE": {
          return value.toFixed(2);
        }
        case "CRATE4": {
          return value.toFixed(4);
        }
        case "CNT": {
          return this.numberWithCommas(value) + " ea";
        }
        case "WEIGHT": {
          if (value >= 500) {
            return this.numberWithCommas(value / 1000, 1) + " Kg";
          } else {
            return this.numberWithCommas(value) + " g";
          }
        }
        case "WON": {
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
        case "WEIGHT":
          if (value >= 1000000) {
            return this.numberWithCommas(value / 1000000, 2) + " Ton";
          } else if (value >= 1000) {
            return this.numberWithCommas(value / 1000, 2) + " Kg";
          } else {
            return this.numberWithCommas(value, 0) + " g";
          }
        case "PERCENT":
          return value.toFixed(2) + " %";
        case "INT":
          return this.numberWithCommas(value);
        case "FLOAT1":
          return this.numberWithCommas(value, 1);
        case "FLOAT":
        case "FLOAT2":
          return this.numberWithCommas(value, 2);
        case "FLOAT3":
          return this.numberWithCommas(value, 3);
        case "FLOAT4":
          return this.numberWithCommas(value, 4);
        default:
          return value.toFixed(2);
      }
    }
    return "";
  }

	/**
	 * 소수점 이상과 이하 정보 가져오기
	 *
	 * @private
	 * @param {number} value
	 * @returns {{ whole: string, decimal: string }}
	 */
  protected getNumberPair(value: number): { whole: string; decimal: string } {
    if (value !== null && value !== undefined && value.toFixed) {
      const values: string[] = value.toFixed(2).split(".");
      return {
        whole: this.numberWithCommas(parseInt(values[0])),
        decimal: values[1]
      };
    } else {
      return {
        whole: "",
        decimal: ""
      };
    }
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
    if (x !== null && x !== undefined && x.toFixed) {
      return x.toFixed(fractionDigits).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return "";
    }
  }
}
