import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 일일근무현황 (관리자) Component
 *
 * @extends AbstractCommonList
 * @exports Cm7020Component
 */
@Component({
  selector: "app-cm7020",
  templateUrl: "./cm7020.component.html",
  styleUrls: ["./cm7020.component.scss"],
})
export class Cm7020Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cm7020 component (일일근무현황 (관리자)).
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
