import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 재보험 시뮬레이션 실행 Component
 *
 * @extends AbstractCommonList
 * @exports Re5300Component
 */
@Component({
  selector: "app-re5300",
  templateUrl: "./re5300.component.html",
  styleUrls: ["./re5300.component.scss"],
})
export class Re5300Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of re5300 component (재보험 시뮬레이션 실행).
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
