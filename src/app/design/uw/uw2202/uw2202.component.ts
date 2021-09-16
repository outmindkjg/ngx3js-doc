import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 휴항환급변경 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2202Component
 */
@Component({
  selector: "app-uw2202",
  templateUrl: "./uw2202.component.html",
  styleUrls: ["./uw2202.component.scss"],
})
export class Uw2202Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2202 component (휴항환급변경).
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
