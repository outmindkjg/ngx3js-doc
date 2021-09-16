import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 근태신청 Component
 *
 * @extends AbstractCommonList
 * @exports Cm7000Component
 */
@Component({
  selector: "app-cm7000",
  templateUrl: "./cm7000.component.html",
  styleUrls: ["./cm7000.component.scss"],
})
export class Cm7000Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cm7000 component (근태신청).
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
