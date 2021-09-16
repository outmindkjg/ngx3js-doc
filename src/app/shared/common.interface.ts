import { AbstractControl } from "@angular/forms";


export interface IAppComponent {
  setBottomMessage: (message: string, type: string) => void;
  clearBottomMessage: () => void;
}

export interface FormAttrVo {
  /** 필수여부 */
  required?: boolean;

  /** 최소 길이 */
  minLength?: number;

  /** 최대 길이 */
  maxLength?: number;
}

/** 회원 정보 */
export interface UserVo {
  /** 회원번호 */
  empNo?: string;

  /** 아이디 */
  userId?: string;

  /** 회원명 */
  userNm?: string;

  /** 회원 레벨 */
  lognTyCd?: string;

}

/** 페이지 정보 */
export interface PagingVo<T> {
  /** 전체 갯수 */
  total?: number;

  /** 전체 페이지 */
  totalPage?: number;

  /** 현재 페이지 */
  currPage?: number;

  /** 자료 더 존재 여부 */
  hasMore?: boolean;

  /** 현재 포인트 */
  offset?: number;

  /** 페이지당 아이템수 */
  limit?: number;

  /** 현재 페이지 */
  page: number;

  /** 페이지당 아이템 수 */
  perPage?: number;

  /** 페이지당 아이템 수 */
  refresh?(offset?: number): void;

  /** 검색조건 */
  searchVo?: any;

  /** 더 가져오기 */
  getMore?(): void;

  /**
   * 페이지 아이템
   *
   * @type {T[]}
   */
  items: T[];
}

/** 검색 조건 */
export interface SearchParamVo {
  /** 페이지당 아이템수 */
  limit?: number;

  /** 현재 포인트 */
  offset?: number;

  /** 정렬값 */
  orderBy?: string;

  /** 상세검색 모드 열기 */
  detailOpen?: boolean;

  /** 검색조건 */
  formSearch?: any;
}

/** 검색폼 정보 */
export interface SearchFormVo {
  /** 페이지당 아이템수 */
  limit?: number;

  /** 현재 페이지 */
  page?: number;

  /** 정렬값 */
  orderBy?: string;

  /** 고정 검색 */
  fixedSearch?: any;

  /** 이전 검색 */
  formSearch?: any;
}

/** 홈페이지 설정 */
export interface SiteConfigVo {
  /** 상단 카테고리 */
  topCategory?: CodeVo[];

  /** 카테고리 아이콘 */
  iconCategory?: CodeVo[];

  /** 홈 카테고리 */
  homeCategory?: CodeVo[];

  /** 홈 브랜드 */
  homeBrand?: CodeVo[];

  /** 로케일 */
  locale?: string;

  /** 공급업체 사용 */
  useScm?: string;

  /** 로케일 사용 */
  useLocale?: string;

  /** 로케일 정보 */
  siteLocale?: CodeVo[];

  /** 기본 정책 정보 */
  submenuMallConf?: any;

  /** 사용통화 */
  useCurrency?: CodeVo[];

  /** 사용가능 공유하기 */
  snsShare?: string[];

  /** 사용가능 SNS 로그인 */
  snsLogin?: string[];

  /** 네이버 지도키 */
  naverMapKey?: string;

  /** 구글 지도키 */
  googleMapKey?: string;

  /** 다음 지도키 */
  daumMapKey?: string;

  /** 등록일 */
  regDate?: string;

  /** 수정일 */
  modDate?: string;
}

/** 코드정보 */
export interface ListColunmVo {
  /** key */
  key?: string;

  /** 라별명 */
  label?: string;

  /** 표시 형태 */
  type?: string;

  /** 표시 형태 옵션 */
  typeOption?: string;

  /** 가로 크기 */
  width?: number;

  /** 가로 크기 단위 */
  widthUnit?: string;

  /** 하부 차일드 키 */
  childKey?: string;

  /** 색상 */
  color?: string;

  /** 선택여부 */
  selected?: boolean;

  /** Header Class Name */
  headerClass?: string;

  /** ROW Class Name */
  rowClass?: string;

  /** LI  Class Name */
  liClass?: string;

  /** 표시여부 */
  show?: boolean;

  /** 기본여부 */
  isDefault?: boolean;

  /** 키워드 */
  keyword?: string;

  /** 스타일 */
  style?: any;
}

/** 코드정보 */
export interface CodeVo {
  /** 카테고리 명 */
  id?: string;

  /** 표시명 */
  label?: string;
}

/** Data Cud Vo */
export interface CudItemVo<T> {
  type: "insert" | "delete" | "update";
  item: T;
}

/** Icon Vo */
export interface IconVo {
  type: string;
  icon : string;
  name : string;
  tag : string;
}

/** Data Cud List Vo */
export type CudItemListVo<T> = CudItemVo<T>[];

export interface FormControlInfos {
  [key: string]: {
    control: AbstractControl;
    isValid: boolean;
    message: { message: string };
  };
}

/** 버튼 정보 */
export interface ButtonVo {
  text: string;
  icon?: string;
  type?: "back" | "danger" | "default" | "normal" | "success";
  stylingMode?: "text" | "outlined" | "contained";
  value: any;
}

/** 토스트 정보 */
export interface NotifyVo {
  message: string;
  width: number;
  shading: boolean;
}

/** 토스트 정보 */
export interface GridConfigVo {
  hasUnsaved: boolean;
  paging: {
    enabled: boolean;
    pageIndex: number;
    pageSize: number;
  };
  allowAdding: boolean;
  editing: {
    mode? : string,
    allowAdding: boolean;
    allowUpdating: boolean;
    allowDeleting: boolean;
    useIcons: boolean;
    texts?: {
      addRow?: string;
      cancelAllChanges?: string;
      cancelRowChanges?: string;
      confirmDeleteMessage?: string;
      confirmDeleteTitle?: string;
      deleteRow?: string;
      editRow?: string;
      saveAllChanges?: string;
      saveRowChanges?: string;
      undeleteRow?: string;
      validationCancelChanges?: string;
    };
  };
}

/**
 * 폼 값 스타일 ENUM
 *
 * @export
 * @enum {number}
 */
export enum FSType {
  R,
  MINL5,
  MINL10,
  MAXL30,
  MAXL50,
  MAXL250,
  INT,
  FLOAT,
  ID,
  PASSWD,
  DEF0,
  DEF1,
  DEF10,
  DEFG,
  DEFS,
  EMPTY,
  NULL,
  DEFA,
  DEFC,
  DEFY,
  DEFW,
  DEFN,
  TEL,
  BIZNO,
  EMAIL,
  EMTA,
}

/**
 * 폼 스키마
 *
 * @export
 * @interface FormSchema
 */
export interface FormSchema {
  [key: string]: FSType[];
}

/**
 * test 스키마
 *
 * @export
 * @interface TestSchema
 */
export interface TestSchema {
  codeGrp: string;
  grpName: string;
  abbrName: string;
  codeLeng: number;
  codeDtm: string;
  auth: string;
}

/**
 * CodeGroupVo
 *
 * @export
 * @interface CodeGroupVo
 */
 export interface CodeGroupVo {
  cmnGrpCd: string;
  cmnGrpCdNm: string;
  jobStCd: string;
  cdDesc: string;
  useYn: string;
}

/**
 * CodeItemVo
 *
 * @export
 * @interface CodeItemVo
 */
 export interface CodeItemVo {
  cmnGrpCd: string;
  cmnCd: string;
  cmnCdNm: string;
  srtOdr : number;
  aplStrDt: string;
  aplEndDt: string;
  rmk: string;
  useYn: string;
}

export interface MenuVo {
  name: string;
  path: string;
  icon?: string;
  auth?: string[];
  selected?: boolean;
  collapsed?: boolean;
  children?: MenuVo[];
}

export interface UserModel {
  name?: string;
  role?: string;
  userName?: string;
}

export interface GroupCodeModel {
  code: string;
  codeName: string;
  codeStep: string;
  codeDescription: string;
  jobCode: string;
  useYn: string;
}

export interface CodeModel {
  cmnCd: string;
  cmnCdNm: string;
  cmnGrpCd: string;
  useYn: string;
  srtOdr: number;
  codeDescription?: string;
  createDtm?: string;
  fstRegpId?: string;
  lstChgDtm?: string;
  lstChgpId?: string;
  rmk?: string;
  type?: string;
  isServer?: boolean;
}

export interface ListCode {
  id: string;
  label: string;
}
