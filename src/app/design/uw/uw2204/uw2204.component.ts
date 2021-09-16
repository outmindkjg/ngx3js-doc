import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 보험료변경 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2204Component
 */
@Component({
  selector: "app-uw2204",
  templateUrl: "./uw2204.component.html",
  styleUrls: ["./uw2204.component.scss"],
})
export class Uw2204Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2204 component (보험료변경).
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
