import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 재보험금 현황 Component
 *
 * @extends AbstractCommonList
 * @exports Re5020Component
 */
@Component({
  selector: "app-re5020",
  templateUrl: "./re5020.component.html",
  styleUrls: ["./re5020.component.scss"],
})
export class Re5020Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of re5020 component (재보험금 현황).
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
