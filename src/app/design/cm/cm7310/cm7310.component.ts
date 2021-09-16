import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 직원정보관리 Component
 *
 * @extends AbstractCommonList
 * @exports Cm7310Component
 */
@Component({
  selector: "app-cm7310",
  templateUrl: "./cm7310.component.html",
  styleUrls: ["./cm7310.component.scss"],
})
export class Cm7310Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cm7310 component (직원정보관리).
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
