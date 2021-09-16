import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 납입스케줄관리 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2306Component
 */
@Component({
  selector: "app-uw2306",
  templateUrl: "./uw2306.component.html",
  styleUrls: ["./uw2306.component.scss"],
})
export class Uw2306Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2306 component (납입스케줄관리).
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
