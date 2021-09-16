import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 계약갱신관리 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2311Component
 */
@Component({
  selector: "app-uw2311",
  templateUrl: "./uw2311.component.html",
  styleUrls: ["./uw2311.component.scss"],
})
export class Uw2311Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2311 component (계약갱신관리).
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
