import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 우선관리대상선박(Targeted Ship) 관리 Component
 *
 * @extends AbstractCommonList
 * @exports Lp4020Component
 */
@Component({
  selector: "app-lp4020",
  templateUrl: "./lp4020.component.html",
  styleUrls: ["./lp4020.component.scss"],
})
export class Lp4020Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of lp4020 component (우선관리대상선박(Targeted Ship) 관리).
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
