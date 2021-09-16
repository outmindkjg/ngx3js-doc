import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment/moment";
import { AbstractBasePipe } from "../abstract.base";
import { CommonService } from "./../services/common.service";

/**
 * 날자 변환 파이프
 *
 * @export
 * @class DateFormatPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: "dateFormat"
})
export class DateFormatPipe extends AbstractBasePipe implements PipeTransform {
	/**
	 * Creates an instance of InputEditorComponent.
	 *
	 * @constructor
	 * @param {CommonService} commonService
	 */
  constructor(commonService: CommonService) {
    super();
    moment.locale(commonService.getLocale());
  }

	/**
	 * 변환 실행하기
	 *
	 * @param {string} dateTime
	 * @param {string} [format='']
	 * @returns {*}
	 */
  transform(dateTime: string, format: string = "auto"): any {
    if (dateTime && dateTime != undefined && dateTime !== "" && dateTime.indexOf("0000") !== 0) {
      if (dateTime.length === 14 && dateTime.indexOf("-") === -1) {
        dateTime =
          dateTime.substr(0, 4) +
          "-" +
          dateTime.substr(4, 2) +
          "-" +
          dateTime.substr(6, 2) +
          " " +
          dateTime.substr(8, 2) +
          ":" +
          dateTime.substr(10, 2) +
          ":" +
          dateTime.substr(12, 2);
      }
      switch (format || "") {
        case "full":
          return moment(dateTime).format("YYYY/MM/DD HH:mm");
        case "fromNow":
          return moment(dateTime).fromNow();
        case "before1Day":
          return moment().diff(moment(dateTime), "hours") < 24 ? true : false;
        case "short":
          return moment(dateTime).format("MM/DD");
        case "time":
          return moment(dateTime).format("HH:mm");
        case "date":
          return moment(dateTime).format("YYYY/MM/DD");
        case "auto":
        case "":
          const dateTimeMoment = moment(dateTime);
          const hour = moment().diff(dateTimeMoment, "hours");
          if (hour < 720 && hour > -720) {
            return dateTimeMoment.format("MM-DD HH:mm");
          } else {
            return dateTimeMoment.format("YYYY-MM-DD");
          }
        default:
          return moment(dateTime).format(format);
      }
    } else {
      return "";
    }
  }
}
