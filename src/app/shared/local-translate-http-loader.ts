import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { Observable } from 'rxjs/Rx';

/**
 * 로케일 정보 병합해서 읽어 오기
 *
 * @export
 * @class LocalTranslateHttpLoader
 * @extends {TranslateHttpLoader}
 */
export class LocalTranslateHttpLoader extends TranslateHttpLoader {
	/**
	 * Creates an instance of LocalTranslateHttpLoader.
	 *
	 * @constructor
	 * @param {HttpClient} localhttp
	 * @param {string} [prefix="/assets/i18n/"]
	 * @param {string} [suffix=".json"]
	 */
  constructor(protected localhttp: HttpClient, public prefix: string = "./assets/i18n/", public suffix: string = ".json") {
    super(localhttp, prefix, suffix);
  }

	/**
	 * Gets the translations from the server
	 *
	 * @param {string} lang
	 * @returns {Observable<Object>}
	 */
  public getTranslation(lang: string): Observable<Object> {
    const urls : string[] = [];
    urls.push(`${this.prefix}${lang}/cl${this.suffix}`);
    urls.push(`${this.prefix}${lang}/cm${this.suffix}`);
    urls.push(`${this.prefix}${lang}/lp${this.suffix}`);
    urls.push(`${this.prefix}${lang}/ms${this.suffix}`);
    urls.push(`${this.prefix}${lang}/re${this.suffix}`);
    urls.push(`${this.prefix}${lang}/uw${this.suffix}`);
    urls.push(`${this.prefix}${lang}/common${this.suffix}`);
    const forks : Observable<Object>[] = [];
    urls.forEach(url => {
      forks.push(this.localhttp.get(url + '?' + Math.random().toString(36).substr(2, 9)));
    })
    return Observable.forkJoin(forks).map((params) => {
      return Object.assign({}, ...params);
    });
  }
}
