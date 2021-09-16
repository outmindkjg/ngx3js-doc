import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 사용자권한 관리 Component
 *
 * @extends AbstractCommonList
 * @exports Cm7500Component
 */
@Component({
  selector: "app-cm7500",
  templateUrl: "./cm7500.component.html",
  styleUrls: ["./cm7500.component.scss"],
})
export class Cm7500Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cm7500 component (사용자권한 관리).
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
