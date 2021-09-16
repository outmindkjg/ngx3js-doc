import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 최소보험료초과분 관리 Component
 *
 * @extends AbstractCommonList
 * @exports Re5120Component
 */
@Component({
  selector: "app-re5120",
  templateUrl: "./re5120.component.html",
  styleUrls: ["./re5120.component.scss"],
})
export class Re5120Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of re5120 component (최소보험료초과분 관리).
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
