import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 재보험료 현황 Component
 *
 * @extends AbstractCommonList
 * @exports Re5010Component
 */
@Component({
  selector: "app-re5010",
  templateUrl: "./re5010.component.html",
  styleUrls: ["./re5010.component.scss"],
})
export class Re5010Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of re5010 component (재보험료 현황).
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
