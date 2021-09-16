import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 시뮬레이션정보 재보험구조 관리 Component
 *
 * @extends AbstractCommonList
 * @exports Re5330Component
 */
@Component({
  selector: "app-re5330",
  templateUrl: "./re5330.component.html",
  styleUrls: ["./re5330.component.scss"],
})
export class Re5330Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of re5330 component (시뮬레이션정보 재보험구조 관리).
   * 
   * @param commonService 
   * @param formBuilder 
   */
  constructor(commonService: CommonService, formBuilder: FormBuilder) {
    super(
      commonService,
      "sample/exuser",
      formBuilder,
      {
        cmnGrpCd: [FSType.R],
      },
      null,
      { limit: 30 },
      "codeGrp"
    );
  }
}
