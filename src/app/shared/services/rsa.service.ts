import { Injectable } from "@angular/core";
import * as CryptoJS from "crypto-js";
import { AbstractBaseService } from "./../abstract.base";

/**
 * 암호화 VO
 *
 * @interface EncriptVo
 */
interface EncriptVo {
  ct: string;
  iv: string;
  s: string;
}

/**
 * 암호화 클래스
 *
 * @export
 * @class RsaService
 */
@Injectable()
export class RsaService extends AbstractBaseService {
	/**
	 * 기본 암호키
	 *
	 * @static
	 * @type {string}
	 */
  static privateKey = "7061737323313233";

	/**
	 * 사용여부
	 *
	 * @private
	 * @type {boolean}
	 */
  protected enabled = true;

	/**
	 * 암호화 로직
	 *
	 * @private
	 */
  protected cryptoJSAesJson = {
    stringify(cipherParams : any) {
      const j: any = { ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64) };
      if (cipherParams.iv) {
        j.iv = cipherParams.iv.toString();
      }
      if (cipherParams.salt) {
        j.s = cipherParams.salt.toString();
      }
      return JSON.stringify(j);
    },
    parse(jsonStr: string) {
      const jsonObj = JSON.parse(jsonStr);
      const cipherParams = (<any>CryptoJS).lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct)
      });
      if (jsonObj.iv) {
        cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv);
      }
      if (jsonObj.s) {
        cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s);
      }
      return cipherParams;
    }
  };

	/**
	 * Creates an instance of SharedConfService.
	 *
	 * @constructor
	 */
  constructor() {
    super();
  }

	/**
	 * 개인키 설정
	 *
	 * @param {string} privateKey
	 */
  public setPrivateKey(privateKey: string) {
    RsaService.privateKey = privateKey;
  }

	/**
	 * 사용가능 여부
	 *
	 * @returns {boolean}
	 */
  isEnabled(): boolean {
    return this.enabled;
  }

	/**
	 * 암호화 하기
	 *
	 * @param {*} obj
	 * @returns {EncriptVo}
	 */
  encrypt(obj: any): EncriptVo {
    if (!this.enabled) {
      return obj;
    }
    return JSON.parse(CryptoJS.AES.encrypt(JSON.stringify(obj), RsaService.privateKey, { format: this.cryptoJSAesJson }).toString());
  }

	/**
	 * 빈값여부 확인
	 *
	 * @param {*} value
	 * @returns {boolean}
	 */
  protected isNotNullEmpty(value: any): boolean {
    if (value === undefined || value === null || value === "" || value === 0) {
      return false;
    }
    if (typeof value === "string") {
      if (value.split(" ").join("") === "") {
        return false;
      }
    }
    return true;
  }

	/**
	 * 복호화 하기
	 *
	 * @param {EncriptVo} encrypted
	 * @returns {*}
	 */
  decrypt(encrypted: EncriptVo): any {
    if (encrypted != null && this.isNotNullEmpty(encrypted.ct) && this.isNotNullEmpty(encrypted.iv) && this.isNotNullEmpty(encrypted.s)) {
      try {
        const bytes = CryptoJS.AES.decrypt(JSON.stringify(encrypted), RsaService.privateKey, { format: this.cryptoJSAesJson });
        const jsonStr = bytes.toString(CryptoJS.enc.Utf8);
        if (jsonStr && jsonStr !== undefined && jsonStr !== null && jsonStr !== "") {
          return JSON.parse(jsonStr);
        }
      } catch (ex) { }
      return null;
    } else {
      return encrypted;
    }
  }
}
