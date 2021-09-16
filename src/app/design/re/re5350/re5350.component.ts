import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 재보험 시뮬레이션 결과보고 Component
 *
 * @extends AbstractCommonList
 * @exports Re5350Component
 */
@Component({
  selector: "app-re5350",
  templateUrl: "./re5350.component.html",
  styleUrls: ["./re5350.component.scss"],
})
export class Re5350Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of re5350 component (재보험 시뮬레이션 결과보고).
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
