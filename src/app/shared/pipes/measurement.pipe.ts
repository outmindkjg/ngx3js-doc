import { Pipe, PipeTransform } from "@angular/core";

/**
 * 도량형 파이프
 *
 * @export
 * @class MeasurementPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: "measurement"
})
export class MeasurementPipe implements PipeTransform {
  /**
   * 변환 실행하기
   *
   * @param {value} value
   * @returns {string}
   */
  transform(value: string, showType: string, zeroDel: boolean = true, fix: number = -1): string {
    if (value != null && value != "") {
      if (fix < 0) {
        switch (showType) {
          case "mm":
            fix = 0;
            break;
          case "cm":
            fix = 0;
            break;
          case "m":
            fix = 1;
            break;
          case "km":
            fix = 2;
            break;
          case "in":
          case "inch":
            fix = 2;
            break;
        }
      }
      let resultValue = value.replace(/([0-9\.]+)[ x\*]+([0-9\.]+)[ ]*(cm|mm|inch|in|)/g, (matches: string, value1: string, value2: string, baseUnit: string) => {
        let cValue1 = parseFloat(value1);
        let cValue2 = parseFloat(value2);
        switch (baseUnit) {
          case "in":
          case "inch":
            cValue1 = cValue1 / 0.393701;
            cValue2 = cValue2 / 0.393701;
            break;
          case "km":
            cValue1 = cValue1 * 100000;
            cValue2 = cValue2 * 100000;
            break;
          case "m":
            cValue1 = cValue1 * 100;
            cValue2 = cValue2 * 100;
            break;
          case "mm":
            cValue1 = cValue1 / 10;
            cValue2 = cValue2 / 10;
            break;
          case "":
          case "cm":
          default:
            break;
        }
        const sValue1 = this.getInfoSize(cValue1, showType, fix, zeroDel);
        const sValue2 = this.getInfoSize(cValue2, showType, fix, zeroDel);
        return sValue1 + " x " + sValue2 + " " + showType;
      });
      return resultValue;
    }
    return value;
  }

  protected getInfoSize(size: number, showType: string, fix: number, zeroDel: boolean) {
    let resultValue: string = "";
    switch (showType) {
      case "mm":
        resultValue = (size * 10).toFixed(fix);
        break;
      case "cm":
        resultValue = size.toFixed(0);
        break;
      case "m":
        resultValue = (size / 100).toFixed(fix);
        break;
      case "km":
        resultValue = (size / 100000).toFixed(fix);
        break;
      case "inch":
      case "in":
        resultValue = (size * 0.393701).toFixed(fix);
        break;
    }
    if (zeroDel) {
      return parseFloat(resultValue).toString();
    } else {
      return resultValue;
    }
  }
}
