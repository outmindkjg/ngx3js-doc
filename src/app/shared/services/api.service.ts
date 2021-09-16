import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { environment } from "../../../environments/environment";
import { AbstractBaseService } from "./../abstract.base";

/**
 * API 서비스
 *
 * @export
 * @class ApiService
 */
@Injectable()
export class ApiService extends AbstractBaseService {
  /**
   * 기본 API URL
   *
   * @type {string}
   */
  url: string = environment.serverUrl;

  /**
   * Creates an instance of ApiService.
   *
   * @constructor
   * @param {HttpClient} http
   */
  constructor(public http: HttpClient) {
    super();
  }

  /**
   * 프로미스 가져오기
   *
   * @param {Observable<any>} observable
   * @returns {Promise<any>}
   */
  getPromise(observable: Observable<any>): Promise<any> {
    return new Promise((resolve, reject) => {
      observable.subscribe(
        (res) => {
          if (res.status === 200) {
            if (res.body) {
              const resBody = res.body;
              if (resBody.result && resBody.item !== null && resBody.item !== undefined) {
                resolve(resBody.item);
              } else {
                reject(resBody);
              }
            } else if (res.headers) {
              const token: string = res.headers.get("Authorization");
              if (token !== null && token !== undefined && token !== "") {
                resolve({ token: token.substr(7) });
              } else {
                resolve({ result: true });
              }
            } else {
              resolve({ result: true });
            }
          } else {
            if (res.body) {
              reject(res.body);
            } else {
              reject({ code: res.status });
            }
          }
        },
        (err) => {
          console.log(err);
          if (err.error) {
            reject(err.error);
          } else if (err.message) {
            reject({ code: err.status, error: err.message });
          }
        },
        () => {}
      );
    });
  }

  /**
   * 옵션 가져오기
   *
   * @param {*} options
   * @returns {*}
   */
  protected getOptions(options: any): any {
    if (options === undefined || options === null) {
      return {};
    } else {
      return options;
    }
  }

  /**
   * 파람 가져오기
   *
   * @private
   * @param {*} p
   * @param {*} params
   * @param {string} [parent='']
   * @returns {*}
   */
  protected getGetPrams(p: any, params: any, parent: string = ""): any {
    for (const k in params) {
      const value = params[k];
      if (value) {
        switch (typeof value) {
          case "object":
            if (parent && parent != undefined && parent !== "") {
              this.getGetPrams(p, value, parent + "[" + k + "]");
            } else {
              this.getGetPrams(p, value, k);
            }
            break;
          default:
            if (parent && parent != undefined && parent !== "") {
              p[parent + "[" + k + "]"] = value;
            } else {
              p[k] = value;
            }
            break;
        }
      }
    }
    return p;
  }

  /**
   * GET 방식으로 데이타 가져오기
   *
   * @param {string} endpoint
   * @param {*} [params]
   * @param {any} [options]
   * @returns {Promise<any>}
   */
  get(endpoint: string, params: any = null, options: any = {}): Promise<any> {
    options = this.getOptions(options);
    if (params) {
      options.params = this.getGetPrams(options.params || {}, params);
    }
    return this.getPromise(this.http.get(this.url + endpoint, options));
  }

  /**
   * 포스트 방식으로 데이타 가져오기
   *
   * @param {string} endpoint
   * @param {*} body
   * @param {any} [options]
   * @returns {Promise<any>}
   */
  post(endpoint: string, body: any, options?: any): Promise<any> {
    return this.getPromise(
      this.http.post(this.url + endpoint, body, this.getOptions(options))
    );
  }

  /**
   * PUT 방식으로 데이타 가져오기
   *
   * @param {string} endpoint
   * @param {*} body
   * @param {any} [options]
   * @returns {Promise<any>}
   */
  put(endpoint: string, body: any, options?: any): Promise<any> {
    return this.getPromise(
      this.http.put(this.url + endpoint, body, this.getOptions(options))
    );
  }

  /**
   * 삭제 방식으로 가져오기
   *
   * @param {string} endpoint
   * @param {any} [options]
   * @returns {Promise<any>}
   */
  delete(endpoint: string, options?: any): Promise<any> {
    return this.getPromise(
      this.http.delete(this.url + endpoint, this.getOptions(options))
    );
  }

  /**
   * 패치 방식으로 가져오기
   *
   * @param {string} endpoint
   * @param {*} body
   * @param {any} [options]
   * @returns {Promise<any>}
   */
  patch(endpoint: string, body: any, options?: any): Promise<any> {
    return this.getPromise(
      this.http.patch(this.url + endpoint, body, this.getOptions(options))
    );
  }
}
