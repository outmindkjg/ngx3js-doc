import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * Condition Survey 대상 선박 관리(대상확인 - 갱신 및 계약후) Component
 *
 * @extends AbstractCommonList
 * @exports Lp4010Component
 */
@Component({
  selector: "app-lp4010",
  templateUrl: "./lp4010.component.html",
  styleUrls: ["./lp4010.component.scss"],
})
export class Lp4010Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of lp4010 component (Condition Survey 대상 선박 관리(대상확인 - 갱신 및 계약후)).
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
