import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 팀/부서정보관리 Component
 *
 * @extends AbstractCommonList
 * @exports Cm7300Component
 */
@Component({
  selector: "app-cm7300",
  templateUrl: "./cm7300.component.html",
  styleUrls: ["./cm7300.component.scss"],
})
export class Cm7300Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cm7300 component (팀/부서정보관리).
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
