import { Injectable } from "@angular/core";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { AbstractBaseService } from "./../abstract.base";

/**
 * 셋팅 VO
 *
 * @interface SettingsVo
 */
interface SettingsVo {
  [key: string]: any;
}

/**
 * 설정 서비스
 *
 * @export
 * @class SettingsService
 */
@Injectable()
export class SettingsService extends AbstractBaseService {
  protected SETTINGS_KEY = "_settings_nepsis";
  settings: SettingsVo = {};
  _defaults: { [key: string]: any } = {};
  _readyPromise?: Promise<any>;

	/**
	 * Creates an instance of SettingsService.
	 *
	 * @constructor
	 * @param {LocalStorage} storage
	 */
  constructor(public storage: LocalStorage) {
    super();
  }

	/**
	 * 설정 읽어 들이기
	 *
	 * @returns
	 */
  load() {
    const observable = this.storage.getItem(this.SETTINGS_KEY);
    observable.subscribe(value => {
      if (value !== null) {
        this.settings = value as SettingsVo;
        return this._mergeDefaults(this._defaults);
      } else {
        return this.setAll(this._defaults);
      }
    });
    return observable;
  }

	/**
	 * 설정 병합하기
	 *
	 * @param {*} defaults
	 * @returns
	 */
  _mergeDefaults(defaults: any) {
		/**
		 * 설정 병합하기
		 *
		 * @param {*} defaults
		 * @returns
		 */
    for (const k in defaults) {
      if (!(k in this.settings)) {
        this.settings[k] = defaults[k];
      }
    }
    return this.setAll(this.settings);
  }

	/**
	 * 설정 병합
	 *
	 * @param {*} settings
	 * @returns
	 */
  merge(settings: any) {
    for (const k in settings) {
      this.settings[k] = settings[k];
    }
    return this.save();
  }

	/**
	 * 설정에 값 지정하기
	 *
	 * @param {string} key
	 * @param {*} value
	 * @returns
	 */
  setValue(key: string, value: any) {
    this.settings[key] = value;
    return this.storage.setItem(this.SETTINGS_KEY, this.settings).subscribe(() => {
      // 			alert('save OK' + key);
    });
  }

	/**
	 * 설정의 값을 교체하기
	 *
	 * @param {*} value
	 * @returns
	 */
  setAll(value: any) {
    this.settings = value;
    return this.storage.setItem(this.SETTINGS_KEY, value);
  }

	/**
	 * 특정 키의 값 가져오기
	 *
	 * @param {string} key
	 * @returns
	 */
  getValue(key: string) {
    return this.storage.getItem(this.SETTINGS_KEY).subscribe((settings : any) => {
      return settings[key];
    });
  }

	/**
	 * 저장하기
	 *
	 * @returns
	 */
  save() {
    return this.setAll(this.settings);
  }

	/**
	 * 전체 설정 값 가져오기
	 *
	 * @readonly
	 */
  get allSettings() {
    return this.settings;
  }
}
