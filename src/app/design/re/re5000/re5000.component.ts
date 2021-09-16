import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 재보험 스케줄현황 관리 Component
 *
 * @extends AbstractCommonList
 * @exports Re5000Component
 */
@Component({
  selector: "app-re5000",
  templateUrl: "./re5000.component.html",
  styleUrls: ["./re5000.component.scss"],
})
export class Re5000Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of re5000 component (재보험 스케줄현황 관리).
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
