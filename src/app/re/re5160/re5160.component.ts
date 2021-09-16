import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 재보험 문서료 정정 Component
 *
 * @extends AbstractCommonList
 * @exports Re5160Component
 */
@Component({
  selector: "app-re5160",
  templateUrl: "./re5160.component.html",
  styleUrls: ["./re5160.component.scss"],
})
export class Re5160Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of re5160 component (재보험 문서료 정정).
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
