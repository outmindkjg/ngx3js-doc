import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 권한그룹 설정 Component
 *
 * @extends AbstractCommonList
 * @exports Cm7510Component
 */
@Component({
  selector: "app-cm7510",
  templateUrl: "./cm7510.component.html",
  styleUrls: ["./cm7510.component.scss"],
})
export class Cm7510Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cm7510 component (권한그룹 설정).
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
