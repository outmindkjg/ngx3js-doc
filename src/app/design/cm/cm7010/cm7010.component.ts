import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 근태현황조회 (관리자/사용자) Component
 *
 * @extends AbstractCommonList
 * @exports Cm7010Component
 */
@Component({
  selector: "app-cm7010",
  templateUrl: "./cm7010.component.html",
  styleUrls: ["./cm7010.component.scss"],
})
export class Cm7010Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cm7010 component (근태현황조회 (관리자/사용자)).
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
