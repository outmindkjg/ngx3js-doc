import { Pipe, PipeTransform } from "@angular/core";
import { CodeVo } from "../common.interface";
import { AbstractBasePipe } from "../abstract.base";
import ArrayStore from "devextreme/data/array_store";
import DataSource from "devextreme/data/data_source";
import { CommonService } from "../services";
import Store from "devextreme/data/abstract_store";
import CustomStore from "devextreme/data/custom_store";

/**
 * 코드 파이프
 *
 * @export
 * @class CodePipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: "code"
})
export class CodePipe extends AbstractBasePipe implements PipeTransform {
	/**
	 * Creates an instance of CodeVoPipe.
	 *
	 * @constructor
	 */
  constructor(private commonService : CommonService) {
    super();
  }

	/**
	 * 변환 실행하기
	 *
	 * @param {string} codeKey
	 * @returns {DataSource}
	 */
  transform(codeKey: string): any {
    return {
      store: new CustomStore(
        {
          key: "id",
          loadMode: "raw",
          load: () => {
            return this.commonService.getCodeVo(codeKey);
          }
        }
      )
    }
  }
}
