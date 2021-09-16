import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 임금채권보장보험 가입증서 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2451Component
 */
@Component({
  selector: "app-uw2451",
  templateUrl: "./uw2451.component.html",
  styleUrls: ["./uw2451.component.scss"],
})
export class Uw2451Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2451 component (임금채권보장보험 가입증서).
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
