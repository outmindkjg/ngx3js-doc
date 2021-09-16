import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 최소보험료 관리 Component
 *
 * @extends AbstractCommonList
 * @exports Re5110Component
 */
@Component({
  selector: "app-re5110",
  templateUrl: "./re5110.component.html",
  styleUrls: ["./re5110.component.scss"],
})
export class Re5110Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of re5110 component (최소보험료 관리).
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
