import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * IT Request 신청 Component
 *
 * @extends AbstractCommonList
 * @exports Cm7900Component
 */
@Component({
  selector: "app-cm7900",
  templateUrl: "./cm7900.component.html",
  styleUrls: ["./cm7900.component.scss"],
})
export class Cm7900Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cm7900 component (IT Request 신청).
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
