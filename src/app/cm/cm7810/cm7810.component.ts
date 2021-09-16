import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 프로그램관리 Component
 *
 * @extends AbstractCommonList
 * @exports Cm7810Component
 */
@Component({
  selector: "app-cm7810",
  templateUrl: "./cm7810.component.html",
  styleUrls: ["./cm7810.component.scss"],
})
export class Cm7810Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cm7810 component (프로그램관리).
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
