import { Pipe, PipeTransform } from "@angular/core";
import { CodeVo } from "./../common.interface";
import { AbstractBasePipe } from "../abstract.base";

/**
 * 코드 VO 파이프
 *
 * @export
 * @class CodeVoPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: "codeVo"
})
export class CodeVoPipe extends AbstractBasePipe implements PipeTransform {
	/**
	 * Creates an instance of CodeVoPipe.
	 *
	 * @constructor
	 * @param {GoodsInfoService} goodsInfoService
	 */
  constructor() {
    super();
  }

  getFileSize(value: number): string {
    if (value > 1024 * 1024) {
      return (value / (1024 * 1024)).toFixed(2) + " Mb";
    } else if (value > 1024) {
      return (value / 1024).toFixed(2) + " Kb";
    } else {
      return value.toString() + " b";
    }
  }

	/**
	 * 변환 실행하기
	 *
	 * @param {CodeVo} codeVo
	 * @returns {string}
	 */
  transform(codeKey: any, codeType: string): CodeVo | null {
    if (codeKey && codeKey != undefined && codeKey !== "" && codeType && codeType !== "") {
      switch (codeType) {
        case "image":
        case "attach":
          const fileInfo = (codeKey as string).split("@!@");
          const fileTextList: string[] = [];
          fileInfo.forEach(fileText => {
            if (fileText != "") {
              const [fileName, fileSizeTxt] = fileText.split("#");
              const fileSize = parseInt(fileSizeTxt);
              if (!isNaN(fileSize) && fileSize > 0) {
                fileTextList.push(fileName + "(" + this.getFileSize(fileSize) + ")");
              }
            }
          });
          return {
            label: fileTextList.join(", ")
          };
        case 'codevo':
          return codeKey;
        case "linkInfo":
          return {};
        default:
          return {};
          break;
      }
    } else {
      return null;
    }
  }
}
