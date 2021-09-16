import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 임금채권보장보험 Invoice Component
 *
 * @extends AbstractCommonList
 * @exports Uw2452Component
 */
@Component({
  selector: "app-uw2452",
  templateUrl: "./uw2452.component.html",
  styleUrls: ["./uw2452.component.scss"],
})
export class Uw2452Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2452 component (임금채권보장보험 Invoice).
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
