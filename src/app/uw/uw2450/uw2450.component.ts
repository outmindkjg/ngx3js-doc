import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * Loss Ratio Record_선사별 이재율표 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2450Component
 */
@Component({
  selector: "app-uw2450",
  templateUrl: "./uw2450.component.html",
  styleUrls: ["./uw2450.component.scss"],
})
export class Uw2450Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2450 component (Loss Ratio Record_선사별 이재율표).
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
