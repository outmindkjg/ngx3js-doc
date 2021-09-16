import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * FAC재보험료 등록 Component
 *
 * @extends AbstractCommonList
 * @exports Re5170Component
 */
@Component({
  selector: "app-re5170",
  templateUrl: "./re5170.component.html",
  styleUrls: ["./re5170.component.scss"],
})
export class Re5170Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of re5170 component (FAC재보험료 등록).
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
