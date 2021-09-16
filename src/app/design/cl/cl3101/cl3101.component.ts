import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 보상 월마감 Overview Component
 *
 * @extends AbstractCommonList
 * @exports Cl3101Component
 */
@Component({
  selector: "app-cl3101",
  templateUrl: "./cl3101.component.html",
  styleUrls: ["./cl3101.component.scss"],
})
export class Cl3101Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cl3101 component (보상 월마감 Overview).
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
