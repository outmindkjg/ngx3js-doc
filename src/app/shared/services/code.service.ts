import { Injectable } from "@angular/core";
import { AbstractBaseService } from "./../abstract.base";
import { CodeVo } from "./../common.interface";

/**
 * 코드 서비스
 *
 * @export
 * @class CodeService
 */
 @Injectable()
 export class CodeService extends AbstractBaseService {
  public codeData: { [key: string]: CodeVo[] | null } = {
    USE_YN : [ { id : 'Y', label : 'Yes'}, { id : 'N' , label : 'No'}]
  };

  /**
   * Creates an instance of CodeService.
   *
   * @constructor
   */
  constructor() {
    super();
  }

  reloadCode() {
    Object.assign(this.codeData, {
    });
  }

  /**
   * 코드 VO 리스트 가져오기
   *
   * @param {string} itemKey
   * @returns {CodeVo[]}
   */
  getCodeVo(itemKey: string): CodeVo[] {
    return this.codeData[itemKey] as CodeVo[];
  }

  /**
   * 코드 VO 리스트 설정하기
   *
   * @param {string} itemKey
   * @param {number} [ttlTime=900]
   * @param {CodeVo[]} [codeVos=[]]
   */
  setCodeVo(itemKey: string, codeVos: CodeVo[] = []): void {
    this.codeData[itemKey] = codeVos;
  }

	/**
	 * 코드 VO 리스트 초기화 하기
	 *
	 * @param {string} itemKey
	 * @param {CodeVo[]} [codeVos=[]]
	 */
  resetCodeVo(itemKey: string, codeVos: CodeVo[] = []) {
    if (this.codeData[itemKey] === null || this.codeData[itemKey] === undefined) {
      this.codeData[itemKey] = codeVos;
    } else {
      const codeData = this.codeData[itemKey];
      if (codeData !== null) {
        codeData.splice(0, codeData.length);
        codeVos.forEach(code => {
          codeData.push(code);
        });
      }
    }
  }

}
