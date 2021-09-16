import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * OS 대비 지급실적 Component
 *
 * @extends AbstractCommonList
 * @exports Cl3102Component
 */
@Component({
  selector: "app-cl3102",
  templateUrl: "./cl3102.component.html",
  styleUrls: ["./cl3102.component.scss"],
})
export class Cl3102Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cl3102 component (OS 대비 지급실적).
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
