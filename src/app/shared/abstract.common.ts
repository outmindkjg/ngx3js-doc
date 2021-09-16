import { AfterContentInit, Component, Inject, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { DxDataGridComponent } from "devextreme-angular";
import ArrayStore from "devextreme/data/array_store";
import { BsModalRef } from "ngx-bootstrap/modal";
import { AbstractBaseComponent } from "./abstract.base";
import {
  ButtonVo,
  CudItemListVo,
  CudItemVo,
  FormControlInfos,
  FormSchema,
  FSType,
  GridConfigVo,
  MenuVo,
  NotifyVo,
  PagingVo,
  SearchFormVo,
} from "./common.interface";
import { CommonService } from "./services/common.service";

/**
 * CommonComponent Abstract Class
 *
 * @export
 * @abstract
 * @class AbstractCommonComponent
 */
@Component({
  template: "",
})
export abstract class AbstractCommonComponent extends AbstractBaseComponent {
  /**
   * Creates an instance of AbstractCommonComponent.
   *
   * @constructor
   */
  constructor(protected commonService: CommonService) {
    super();
  }

  /**
   * 디버그 로그
   *
   * @param {string} key
   * @param {*} value
   */
  public debugLog(key: string, value: any) {
    this.commonService.debugLog(key, value);
  }

  /**
   * 빈값여부 확인
   *
   * @param {*} value
   * @returns {boolean}
   */
  public isNullEmpty(value: any): boolean {
    return !this.isNotNullEmpty(value);
  }

  /**
   * 빈값여부 확인
   *
   * @param {*} value
   * @returns {boolean}
   */
  public isNotNullEmpty(value: any): boolean {
    return this.commonService.isNotNullEmpty(value);
  }

  /**
   * Opens alert
   *
   * @param message
   * @param [title]
   * @param [interpolateParams]
   * @returns alert
   */
  public openAlert(
    message: string,
    title?: string,
    interpolateParams?: Object
  ): Promise<void> {
    return this.commonService.openAlert(message, title, interpolateParams);
  }

  /**
   * Opens confirm
   *
   * @param message
   * @param [title]
   * @param [interpolateParams]
   * @returns confirm
   */
  public openConfirm(
    message: string,
    title?: string,
    interpolateParams?: Object
  ): Promise<boolean> {
    return this.commonService.openConfirm(message, title, interpolateParams);
  }

  /**
   * Custom Confirm 열기
   *
   * @param messageHtml
   * @param title
   * @param buttons
   * @returns custom
   */
  protected openCustom(
    messageHtml: string,
    title: string,
    buttons: ButtonVo[],
    interpolateParams?: Object
  ): Promise<any> {
    return this.commonService.openCustom(
      messageHtml,
      title,
      buttons,
      interpolateParams
    );
  }

  public openNotify(
    message: NotifyVo | string,
    type: "info" | "warning" | "error" | "success" = "info",
    displayTime: number = 500,
    interpolateParams?: Object,
    isBottom? : boolean
  ) {
    this.commonService.openNotify(
      message,
      type,
      displayTime,
      interpolateParams,
      isBottom
    );
  }

  public openModal(
    component: any,
    param?: any,
    extraParam?: any
  ): Promise<any> {
    return this.commonService.openModalComponent(component, param, extraParam);
  }

  /**
   * 라우터 패스 변경하기
   *
   * @param {string} path
   */
  changeRouter(path: string) {
    this.commonService.changeRouter(path);
  }

  /**
   * 로케일 스트링 가져오기
   *
   * @param {...string[]} keys
   * @returns {Promise<{ [key: string]: string }>}
   */
  getLocaleString(...keys: string[]): Promise<{ [key: string]: string }> {
    return this.commonService.getLocaleString(keys);
  }

  /**
   * Gets locale message
   *
   * @param msgKey
   * @param [interpolateParams]
   * @returns locale message
   */
  getLocaleMessage(
    msgKey: string,
    interpolateParams?: Object
  ): Promise<string> {
    return this.commonService.getLocaleMessage(msgKey, interpolateParams);
  }

  /**
   * Gets locale message
   *
   * @param msgKeys
   * @param [interpolateParams]
   * @returns locale message
   */
  getLocaleMessages(
    msgKeys: string[],
    interpolateParams?: Object
  ): Promise<{ [key: string]: string }> {
    return this.commonService.getLocaleMessages(msgKeys, interpolateParams);
  }

  /**
   * 리스트 가져오기
   *
   * @param {string} apiUrl
   * @param {*} [formValue]
   * @param {number} [offset=0]
   * @param {number} [limit=10]
   * @returns {Promise<any[]>}
   */
  public getList(
    apiUrl: string,
    formValue?: any,
    offset: number = 0,
    limit: number = 10
  ): Promise<any[]> {
    return this.commonService.getList(apiUrl, formValue, offset, limit);
  }

  /**
   * 페이징 정보 가져오기
   *
   * @param {string} apiUrl
   * @param {*} [formValue]
   * @param {number} [offset=0]
   * @param {number} [limit=10]
   * @param {string} [orderBy='']
   * @param {*} [formFixSearch={}]
   * @param {boolean} [detailOpen=false]
   * @returns {Promise<PagingVo<any>>}
   */
  public getPaging(
    apiUrl: string,
    formValue?: any,
    offset: number = 0,
    limit: number = 10,
    orderBy: string = "",
    formFixSearch: any = {}
  ): Promise<PagingVo<any>> {
    return this.commonService.getPaging(
      apiUrl,
      formValue,
      offset,
      limit,
      orderBy,
      formFixSearch
    );
  }

  /**
   * 보기 정보 가져오기
   *
   * @param {string} apiUrl
   * @param {*} [formValue]
   * @returns {Promise<any>}
   */
  public getView(apiUrl: string, formValue?: any): Promise<any> {
    return this.commonService.getView(apiUrl, formValue);
  }

  /**
   * 포스트 방식으로 보기 가져오기
   *
   * @param {string} apiUrl
   * @param {*} [formValue]
   * @returns {Promise<any>}
   */
  public getPostView(apiUrl: string, formValue?: any): Promise<any> {
    return this.commonService.getPostView(apiUrl, formValue);
  }

  /**
   * 등록/생성하기
   *
   * @param {string} apiUrl
   * @param {*} formValue
   * @returns {Promise<any>}
   */
  public getCreate(apiUrl: string, formValue: any): Promise<any> {
    return this.commonService.getCreate(apiUrl, formValue);
  }

  /**
   * 업데이트 하기
   *
   * @param {string} apiUrl
   * @param {*} formValue
   * @returns {Promise<boolean>}
   */
  public getUpdate(apiUrl: string, formValue: any): Promise<boolean> {
    return this.commonService.getUpdate(apiUrl, formValue);
  }

  /**
   * 삭제하기
   *
   * @param {string} apiUrl
   * @returns {Promise<boolean>}
   */
  public getDelete(apiUrl: string): Promise<boolean> {
    return this.commonService.getDelete(apiUrl);
  }

  /**
   * 포스트 방식으로 멀티 데이타 Insert, Delete, Update
   *
   * @param apiUrl
   * @param formValue
   * @param pkList
   * @returns post crud
   */
  public getPostCud(
    apiUrl: string,
    formValue: CudItemListVo<any>,
    pkList?: string | string[]
  ): Promise<any> {
    return this.commonService.getPostCud(apiUrl, formValue, pkList);
  }
}

/**
 * 폼 Abstract
 *
 * @export
 * @abstract
 * @class AbstractForm
 */
@Component({
  template: "",
})
export abstract class AbstractForm extends AbstractCommonComponent {
  /**
   * 폼 그룹
   *
   * @type {FormGroup}
   */
  public form: FormGroup;

  public formControls: FormControlInfos = {};

  /**
   * Creates an instance of AbstractForm.
   *
   * @constructor
   * @param {CommonService} [commonService]
   * @param {FormBuilder} [formBuilder]
   * @param {FormSchema} [formSchema]
   */
  constructor(
    protected commonService: CommonService,
    formBuilder: FormBuilder,
    @Inject("") protected formSchema: FormSchema,
    @Inject("") protected nameAlias?: { [key: string]: string }
  ) {
    super(commonService);
    this.setForm(formBuilder, formSchema, nameAlias);
  }

  /**
   * Sets form
   *
   * @param formBuilder
   * @param [formSchema]
   * @param [nameAlias]
   */
  public setForm(
    formBuilder: FormBuilder,
    formSchema?: FormSchema,
    nameAlias?: { [key: string]: string }
  ) {
    this.formSchema = formSchema;
    if (this.formSchema) {
      this.form = this.getFormGroup(formBuilder, this.formSchema);
      this.formControls = this.getFormControlInfos(
        this.form,
        this.formSchema,
        nameAlias
      );
    }
  }

  /**
   * 특정 폼 값 설정하기
   *
   * @param {FormGroup} form
   * @param {*} formValue
   * @returns {*}
   */
  public setFormValue(formValue: any, form?: FormGroup): any {
    const formValueSafe: any = {};
    form = form || this.form;
    for (const [key, formControl] of Object.entries(form.controls)) {
      if (formValue[key] !== null && formValue[key] !== undefined) {
        const value = formValue[key];
        formControl.setValue(value);
        formValueSafe[key] = value;
      }
    }
    form.markAsPristine();
    return formValueSafe;
  }

  protected getFormControlInfos(
    form: FormGroup,
    formSchema: FormSchema,
    nameAlias?: { [key: string]: string }
  ): FormControlInfos {
    const formControls: FormControlInfos = {};
    nameAlias = nameAlias || {};
    formSchema = formSchema || this.formSchema;
    form = form || this.form;
    formControls["form"] = {
      control: form,
      get isValid() {
        return form.valid;
      },
      message: { message: "The form is invalid!" },
    };
    for (const [key, value] of Object.entries(formSchema)) {
      const controls = form.controls[key];
      let message = "";
      let keyName = key;
      if (this.isNotNullEmpty(nameAlias[key])) {
        keyName = nameAlias[key];
      }
      if (value.indexOf(FSType.ID) > -1) {
        message = "The " + keyName + " is required id pattern!";
      } else if (value.indexOf(FSType.EMAIL) > -1) {
        message = "The " + keyName + " is required email pattern!";
      } else if (value.indexOf(FSType.TEL) > -1) {
        message = "The " + keyName + " is required telphone number pattern!";
      } else if (value.indexOf(FSType.R) > -1) {
        message = "The " + keyName + " is required!";
      } else {
        message = "The " + keyName + " is invalid!";
      }
      formControls[key] = {
        control: controls,
        get isValid() {
          return controls.valid || controls.pristine;
        },
        message: { message: message },
      };
    }
    return formControls;
  }
  /**
   * 폼그룹 가져오기
   *
   * @protected
   * @param {FormBuilder} formBuilder
   * @param {FormSchema} formSchema
   * @returns {FormGroup}
   */
  protected getFormGroup(
    formBuilder: FormBuilder,
    formSchema: FormSchema
  ): FormGroup {
    const groupInfo: { [key: string]: any[] } = {};
    for (const [key, value] of Object.entries(formSchema)) {
      const formRequireds: any[] = [];
      let defValue: any = null;
      const formLen = 0;
      value.forEach((r) => {
        switch (r) {
          case FSType.R:
            formRequireds.push(Validators.required);
            break;
          case FSType.MINL5:
            formRequireds.push(Validators.minLength(5));
            break;
          case FSType.MINL10:
            formRequireds.push(Validators.minLength(10));
            break;
          case FSType.MAXL30:
            formRequireds.push(Validators.maxLength(30));
            break;
          case FSType.MAXL50:
            formRequireds.push(Validators.maxLength(50));
            break;
          case FSType.MAXL250:
            formRequireds.push(Validators.maxLength(250));
            break;
          case FSType.INT:
            formRequireds.push(Validators.pattern("^(\\+|\\-|)[0-9]+$"));
            defValue = 0;
            break;
          case FSType.FLOAT:
            formRequireds.push(
              Validators.pattern("^(\\+|\\-|)[0-9]+(\\.|)[0-9]+$")
            );
            defValue = 0;
            break;
          case FSType.ID:
            formRequireds.push(
              Validators.pattern("^(@[a-z0-9]{10,20}|[a-z][a-z0-9_]{3,20})$")
            );
            defValue = "";
            break;
          case FSType.PASSWD:
            formRequireds.push(Validators.pattern("^.{3,20}$"));
            formRequireds.push(Validators.pattern("[a-z]"));
            formRequireds.push(Validators.pattern("[0-9]"));
            formRequireds.push(Validators.pattern("[!@#\\$\\^&\\*\\(\\)]"));
            defValue = "";
            break;
          case FSType.BIZNO:
            formRequireds.push(
              Validators.pattern("^[0-9]{3}\\-[0-9]{2}\\-[0-9]{5}$")
            );
            break;
          case FSType.TEL:
            formRequireds.push(
              Validators.pattern(
                "^(\\+[0-9]{1,3}\\-|)[0-9]{1,3}\\-[0-9]{3,4}\\-[0-9]{4}$"
              )
            );
            break;
          case FSType.EMAIL:
            formRequireds.push(Validators.email);
            defValue = "";
            break;
          case FSType.DEF0:
            defValue = 0;
            break;
          case FSType.EMTA:
            defValue = [];
            break;
          case FSType.DEF1:
            defValue = 1;
            break;
          case FSType.DEF10:
            defValue = 10;
            break;
          case FSType.DEFY:
            defValue = "Y";
            break;
          case FSType.DEFW:
            defValue = "W";
            break;
          case FSType.DEFG:
            defValue = "G";
            break;
          case FSType.DEFS:
            defValue = "S";
            break;
          case FSType.EMPTY:
            defValue = "";
            break;
          case FSType.NULL:
            defValue = null;
            break;
          case FSType.DEFA:
            defValue = "A";
            break;
          case FSType.DEFC:
            defValue = "C";
            break;
          case FSType.DEFN:
            defValue = "N";
            break;
        }
      });
      let formReqValue: any[] = [];
      if (formRequireds.length === 0) {
        formReqValue = [defValue];
      } else if (formRequireds.length === 1) {
        formReqValue = [defValue, formRequireds[0]];
      } else {
        formReqValue = [defValue, Validators.compose(formRequireds)];
      }
      if (formLen > 1) {
        for (let i = 1; i <= formLen; i++) {
          groupInfo[key + i] = formReqValue;
        }
      } else {
        groupInfo[key] = formReqValue;
      }
    }
    return formBuilder.group(groupInfo);
  }

  /**
   * 특정 폼에서 폼 값 가져오기
   *
   * @param {FormGroup} form
   * @param {FormSchema} formSchema
   * @returns {*}
   */
  public getFormValue(
    overRider?: { [key: string]: any },
    formSchema?: FormSchema,
    form?: FormGroup
  ): any {
    const resultValue: { [key: string]: any } = {};
    form = form || this.form;
    formSchema = formSchema || this.formSchema;
    const formValue = form.value;
    for (const [key, value] of Object.entries(formSchema)) {
      let resultType = "string";
      const resultLen = 0;
      value.forEach((r) => {
        switch (r) {
          case FSType.INT:
            resultType = "int";
            break;
          case FSType.FLOAT:
            resultType = "float";
            break;
        }
      });
      if (resultLen > 1) {
        const valueList: any = [];
        for (let i = 1; i <= resultLen; i++) {
          valueList.push(this.convTypeValue(formValue[key + i], resultType));
        }
        resultValue[key] = valueList;
      } else {
        resultValue[key] = this.convTypeValue(formValue[key], resultType);
      }
    }
    if (this.isNotNullEmpty(overRider)) {
      Object.assign(resultValue, overRider);
    }
    return resultValue;
  }

  /**
   * 특정 값을 특정 포맷으로 변경하기
   *
   * @private
   * @param {*} value
   * @param {string} valueType
   * @returns {*}
   */
  protected convTypeValue(value: any, valueType: string): any {
    switch (valueType) {
      case "int":
        if (value) {
          return parseInt(value, 0);
        } else {
          return 0;
        }
      case "float":
        if (value) {
          return parseFloat(value);
        } else {
          return 0;
        }
      default:
        if (value) {
          return value;
        } else {
          return "";
        }
    }
  }

  public clearForm() {
    this.form.reset();
  }

  /**
   * 전송 보이기
   */
  public showSubmit() {
    this.openNotify("MSG_SUBMIT");
  }

  protected getDataSource(
    items: any[],
    key: string | string[],
    unSavedData: { [key: string]: CudItemVo<any> },
    gridConfig: GridConfigVo,
    byKey: (key: any) => Promise<any>
  ): ArrayStore {
    return new ArrayStore({
      data: items,
      onInserted: (data, key) => {
        byKey(key).then((data) => {
          this.addUnSaved(data, key, "insert", unSavedData, gridConfig);
        });
      },
      onInserting: (data) => {
        console.log("onInserting", data);
      },
      onUpdated: (key, data) => {
        byKey(key).then((data) => {
          this.addUnSaved(data, key, "update", unSavedData, gridConfig);
        });
      },
      onUpdating: (key, data) => {
        console.log("onUpdating", key, data, unSavedData, gridConfig);
      },
      onRemoved: (key) => {
        byKey(key).then((data) => {
          this.addUnSaved(data, key, "delete", unSavedData, gridConfig);
        });
      },
      onRemoving: (key) => {
        console.log("onRemoving", key);
      },
      key: key,
    });
  }

  addUnSaved(
    item: any,
    key: string,
    type: "insert" | "delete" | "update",
    unSavedData: { [key: string]: CudItemVo<any> },
    gridConfig: GridConfigVo
  ) {
    if (typeof key === "string" || typeof key === "number") {
      switch (type) {
        case "insert":
          unSavedData[key] = {
            type: "insert",
            item: item,
          };
          break;
        case "update":
          if (unSavedData[key] !== undefined) {
            unSavedData[key].item = item;
          } else {
            unSavedData[key] = {
              type: "update",
              item: item,
            };
          }
          break;
        case "delete":
          if (unSavedData[key] !== undefined) {
            switch (unSavedData[key].type) {
              case "insert":
                delete unSavedData[key];
                break;
              case "delete":
              case "update":
                unSavedData[key] = {
                  type: "delete",
                  item: item,
                };
                break;
            }
          } else {
            unSavedData[key] = {
              type: "delete",
              item: item,
            };
          }
      }
      gridConfig.hasUnsaved = Object.entries(this.form!.controls).length > 0;
    }
  }

  clearUnSaved(
    unSavedData: { [key: string]: CudItemVo<any> },
    gridConfig: GridConfigVo
  ) {
    for (const [key, _] of Object.entries(unSavedData)) {
      delete unSavedData[key];
    }
    gridConfig.hasUnsaved = false;
  }

  /**
   * Cleanup just before Angular destroys the directive/component.
   */
  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

/**
 * AbstractModal 모달 창 기본 Abstract Class
 *
 * @export
 * @abstract
 * @class AbstractModal
 */
@Component({
  template: "",
})
export abstract class AbstractModal
  extends AbstractForm
  implements AfterContentInit
{
  /**
   * Creates an instance of AbstractModal.
   *
   * @constructor
   * @param {BsModalRef} modalRef
   */
  constructor(
    commonService: CommonService,
    public modalRef: BsModalRef,
    formBuilder?: FormBuilder,
    @Inject("") formSchema?: FormSchema,
    @Inject("") nameAlias?: { [key: string]: string }
  ) {
    super(commonService, formBuilder, formSchema, nameAlias);
  }

  modalLoaded: boolean = false;

  ngAfterContentInit() {
    this.modalLoaded = true;
  }

  /**
   * 모달창 닫기
   */
  public closeModal(): void {
    this.modalRef.hide();
  }

  /**
   * 모달창 닫기
   */
  public dismissModal(): void {
    this.modalRef.hide();
  }
}

@Component({
  template: "",
})
export abstract class AbstractCommonList<T> extends AbstractForm {
  /**
   * Creates an instance of abstract common list.
   *
   * @param commonService
   * @param apiUrl
   * @param [formBuilder]
   * @param [formSchema]
   * @param [nameAlias]
   * @param [searchForm]
   */
  constructor(
    commonService: CommonService,
    @Inject("") protected apiUrl: string,
    formBuilder?: FormBuilder,
    @Inject("") formSchema?: FormSchema,
    @Inject("") nameAlias?: { [key: string]: string },
    @Inject("")
    public searchForm: SearchFormVo = {
      limit: 20,
      page: 0,
      fixedSearch: {},
    },
    @Inject("") protected key?: string | Array<string>
  ) {
    super(commonService, formBuilder, formSchema, nameAlias);
    if (this.isNullEmpty(this.searchForm)) {
      this.searchForm = {
        limit: 20,
        page: 0,
        fixedSearch: {},
      };
    }
    if (this.isNullEmpty(this.searchForm.fixedSearch)) {
      this.searchForm.fixedSearch = {};
    }
    if (this.isNullEmpty(this.searchForm.limit)) {
      this.searchForm.limit = 20;
    }
  }

  public dataSource: ArrayStore = null;

  @ViewChild('dataGrid') dataGrid: DxDataGridComponent = null;

  /**
   * 다음 자료 존재 여부
   *
   * @type {boolean}
   */
  public hasNext = true;

  /**
   * 아이템 리스트
   *
   * @type {T[]}
   */
  public items: T[] = [];

  protected formSearch: any = {};
  /**
   * 검색 하기
   *
   * @param {*} formValue
   */
  goSearch() {
    this.formSearch = this.getFormValue();
    this.getPageList(0);
  }

  /**
   * 검색 질의 가져오기
   *
   * @returns
   */
  getSearchParam() {
    return Object.assign({}, this.formSearch, this.searchForm.fixedSearch);
  }

  /**
   * 더보기 가져오기
   *
   * @returns
   */
  getMore() {
    this.getPageList(
      this.searchForm.page * this.searchForm.limit + this.searchForm.limit
    );
  }

  /**
   * 페이지 리스트 가져오기
   *
   * @param {number} [offset=-1]
   */
  getPageList(offset: number = -1) {
    if (offset > 0) {
      this.searchForm.page = Math.floor(offset / this.searchForm.limit);
    } else {
      this.searchForm.page = 0;
      this.items = [];
    }
    if (this.dataGrid && this.dataGrid.instance) {
      this.dataGrid.instance.beginCustomLoading("Loading");
    }
    this.getList(
      this.apiUrl,
      this.getSearchParam(),
      this.searchForm.page,
      this.searchForm.limit
    ).then(
      (items) => {
        items.forEach((item) => {
          this.items.push(item);
        });
        this.hasNext = items.length >= this.searchForm.limit! ? true : false;
        this.checkGridList();
      },
      () => {}
    );
  }

  public gridConfig: GridConfigVo = {
    hasUnsaved: false,
    paging: { enabled: false, pageIndex: 0, pageSize: 30 },
    allowAdding: false,
    editing: {
      mode : 'cell',
      allowAdding: false,
      allowUpdating: true,
      allowDeleting: true,
      useIcons: true,
    },
  };

  protected unSavedData: { [key: string]: CudItemVo<T> } = {};

  protected checkGridList() {
    this.dataSource = this.getDataSource(
      this.items,
      this.key,
      this.unSavedData,
      this.gridConfig,
      (key) => {
        return this.dataGrid.instance.byKey(key);
      }
    );
    if (this.dataGrid && this.dataGrid.instance) {
      setTimeout(() => {
        this.dataGrid.instance.endCustomLoading();
      }, 500);
    }
  }

  /**
   * 새로 고침
   */
  doRefresh() {
    this.getPageList(0);
  }

  /**
   * 다음 페이지 가져오기
   */
  doInfinite() {
    this.getPageList(
      this.searchForm.limit + this.searchForm.page * this.searchForm.limit
    );
  }

  ngAfterContentInit() {
    if (this.dataGrid !== null) {
      setTimeout(() => {
        this.dataGrid.instance.getScrollable().on("scroll", (e: any) => {
          if (this.hasNext && e.reachedBottom) {
            this.getMore();
          }
        });
      }, 1000);
    }
    this.getPageList(0);
  }

  public onUploadJson(jsonList: T[]) {
    this.unSavedData = {};
    if (this.isNotNullEmpty(this.key)) {
      if (typeof this.key === "string") {
        const key = this.key;
        jsonList.forEach((item: any) => {
          const randomId = Math.random().toString(36).substr(2, 9);
          item[key] = randomId;
          this.unSavedData[randomId] = {
            type: "insert",
            item: item,
          };
        });
      } else {
        const safeKeys: string[] = [];
        jsonList.forEach((item: any) => {
          const randomIds: string[] = [];
          safeKeys.forEach((key) => {
            const randomId = Math.random().toString(36).substr(2, 9);
            item[key] = randomId;
            randomIds.push(randomId);
          });
          this.unSavedData[randomIds.join("_")] = {
            type: "insert",
            item: item,
          };
        });
      }
    }
    this.items = jsonList;
    this.checkGridList();
    this.hasNext = false;
  }

  getGridUnSaved<T>(gridConfig : GridConfigVo, unSavedData : { [key: string]: CudItemVo<T> }) : CudItemListVo<T> {
    const formValue: CudItemListVo<T> = [];
    if (gridConfig.hasUnsaved) {
      for (const [key, value] of Object.entries(unSavedData)) {
        formValue.push(value);
      }
    }
    return formValue;
  }

  setGridSave() {
    const formValue: CudItemListVo<T> = this.getGridUnSaved(this.gridConfig, this.unSavedData);
    if (formValue.length > 0) {
      this.getPostCud(this.apiUrl, formValue, this.key).then(() => {
        this.getPageList(0);
      });
    }
  }

  /**
   * Initialize the directive/component
   */
  ngOnInit() {
    super.ngOnInit();
  }
}

/**
 * 공통 등록/수정 Abstract
 *
 * @export
 * @abstract
 * @class AbstractCommonWrite
 * @extends {AbstractCommon}
 */
@Component({
  template: "",
})
export abstract class AbstractCommonWrite<T> extends AbstractForm {
  constructor(
    commonService: CommonService,
    @Inject("") public apiUrl: string,
    public route: ActivatedRoute,
    formBuilder?: FormBuilder,
    @Inject("") formSchema?: FormSchema,
    @Inject("") nameAlias?: { [key: string]: string },
    @Inject("") protected pkKey?: string | { [key: string]: string }
  ) {
    super(commonService, formBuilder, formSchema, nameAlias);
  }

  protected pkCode: { [key: string]: string } = null;

  /**
   * 전송하기
   *
   * @param {*} [params]
   * @param {boolean} [keepPage]
   */
  submit(params?: any) {
    params = params || {};
    if (this.isNotNullEmpty(this.pkCode)) {
      if (this.isNotNullEmpty(this.pkKey)) {
        if (typeof this.pkKey === "string") {
          params[this.pkKey] = this.pkCode["id"];
        } else {
          for (const [id, key] of Object.entries(this.pkKey)) {
            params[key] = this.pkCode[id];
          }
        }
      }
      this.getPostCud(this.apiUrl, [
        { type: "update", item: this.getFormValue(params) },
      ]).then(() => {
        this.showSubmit();
      });
    } else {
      this.getPostCud(this.apiUrl, [
        { type: "insert", item: this.getFormValue(params) },
      ]).then(() => {
        this.showSubmit();
      });
    }
  }

  /**
   * Initialize the directive/component
   */
  ngOnInit() {
    super.ngOnInit();
    if (this.route && this.route.params) {
      this.subscribes.push(
        this.route.params.subscribe((params) => {
          if (params["id"]) {
            this.getPageView(params);
          } else {
            this.getPageView();
          }
        })
      );
    } else {
      this.getPageView();
    }
  }

  public item: T = null;

  protected setItem(item: T) {
    this.item = item;
  }

  protected getPageView(params?: { [key: string]: any }) {
    let apiUrl = this.apiUrl;
    this.pkCode = params;
    const viewParams: any = {};
    if (this.isNotNullEmpty(this.pkCode)) {
      if (typeof this.pkKey === "string") {
        viewParams[this.pkKey] = this.pkCode["id"];
        apiUrl += "/" + this.pkCode["id"];
      } else {
        for (const [id, key] of Object.entries(this.pkKey)) {
          viewParams[key] = this.pkCode[id];
          apiUrl += "/" + this.pkCode[id];
        }
      }
      this.getView(apiUrl, viewParams).then((result) => {
        this.setFormValue(result);
        this.setItem(result);
      });
    } else {
      this.setItem(null);
    }
  }
}

/**
 * 공통 보기 Abstract
 *
 * @export
 * @abstract
 * @class AbstractCommonView
 * @extends {AbstractCommonComponent}
 */
@Component({
  template: "",
})
export abstract class AbstractCommonView<T> extends AbstractCommonComponent {
  constructor(
    commonService: CommonService,
    @Inject("") public apiUrl: string,
    public route: ActivatedRoute,
    @Inject("") protected pkKey?: string | { [key: string]: string }
  ) {
    super(commonService);
  }

  protected pkCode: { [key: string]: string } = null;

  /**
   * Initialize the directive/component
   */
  ngOnInit() {
    super.ngOnInit();
    if (this.route && this.route.params) {
      this.subscribes.push(
        this.route.params.subscribe((params) => {
          if (params["id"]) {
            this.getPageView(params);
          } else {
            this.getPageView();
          }
        })
      );
    } else {
      this.getPageView();
    }
  }

  public item: T = null;

  protected setItem(item: T) {
    this.item = item;
  }

  protected getPageView(params?: { [key: string]: any }) {
    let apiUrl = this.apiUrl;
    this.pkCode = params;
    const viewParams: any = {};
    if (this.isNotNullEmpty(this.pkCode)) {
      if (typeof this.pkKey === "string") {
        viewParams[this.pkKey] = this.pkCode["id"];
        apiUrl += "/" + this.pkCode["id"];
      } else {
        for (const [id, key] of Object.entries(this.pkKey)) {
          viewParams[key] = this.pkCode[id];
          apiUrl += "/" + this.pkCode[id];
        }
      }
      this.getView(apiUrl, viewParams).then((result) => {
        this.setItem(result);
      });
    } else {
      this.setItem(null);
    }
  }

  /**
   * 전송 보이기
   */
  public showDelete() {
    this.openNotify("MSG_DELETED");
  }

  public getPageDelete() {
    if (this.item !== null) {
      this.getPostCud(this.apiUrl, [{ type: "delete", item: this.item }]).then(
        () => {
          this.showDelete();
        }
      );
    }
  }
}

/**
 * CommonComponent Abstract Class
 *
 * @export
 * @abstract
 * @class AbstractCommonComponent
 */
@Component({
  template: "",
})
export abstract class AbstractRedirectComponent extends AbstractCommonComponent {
  /**
   * Creates an instance of AbstractCommonComponent.
   *
   * @constructor
   */
  constructor(
    commonService: CommonService,
    @Inject("") protected routerPath: string
  ) {
    super(commonService);
  }

  /**
   * Initialize the directive/component
   */
  ngOnInit() {
    super.ngOnInit();
    const menuInfos: MenuVo[] = this.commonService.getMenuInfos();
    if (menuInfos.length > 0) {
      this.checkMenu(menuInfos);
    } else {
      this.subscribes.push(this.commonService.subscribe('menu').subscribe(() => {
        const menuInfos: MenuVo[] = this.commonService.getMenuInfos();
        this.checkMenu(menuInfos);
      }));
    }
  }

  protected checkMenu(menuInfos : MenuVo[]) {
    if (menuInfos.length > 0) {
      const topMenu = this.getMenu(menuInfos, this.routerPath);
      if (this.isNotNullEmpty(topMenu)) {
        const menu = this.getLastMenu(topMenu);
        if (menu !== null) {
          this.commonService.changeRouter("/" + menu.path);
        } else {
          this.commonService.changeRouter("/home");
        }
      } else {
        this.commonService.changeRouter("/home");
      } 
    }
  }

  protected getLastMenu(menu : MenuVo) : MenuVo {
    if (this.isNotNullEmpty(menu.children) && menu.children.length > 0) {
      return this.getLastMenu(menu.children[0]);
    } else {
      return menu;
    }
  }

  protected getMenu(menuInfos: MenuVo[], path: string): MenuVo {
    let foundMenu: MenuVo = null;
    if (menuInfos !== null) {
      menuInfos.forEach((menu) => {
        if (menu.path === path) {
          foundMenu = menu;
        }
      });
    }
    return foundMenu !== null && foundMenu.children.length > 0
      ? foundMenu
      : null;
  }
}
