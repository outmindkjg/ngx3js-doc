import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * Condition Survey 대상 선박 관리(대상선별 - 갱신전) Component
 *
 * @extends AbstractCommonList
 * @exports Lp4000Component
 */
@Component({
  selector: "app-lp4000",
  templateUrl: "./lp4000.component.html",
  styleUrls: ["./lp4000.component.scss"],
})
export class Lp4000Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of lp4000 component (Condition Survey 대상 선박 관리(대상선별 - 갱신전)).
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
