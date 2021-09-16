import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 검정업체정보관리 Component
 *
 * @extends AbstractCommonList
 * @exports Lp4200Component
 */
@Component({
  selector: "app-lp4200",
  templateUrl: "./lp4200.component.html",
  styleUrls: ["./lp4200.component.scss"],
})
export class Lp4200Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of lp4200 component (검정업체정보관리).
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
