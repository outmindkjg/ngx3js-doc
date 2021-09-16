import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 이익수수료 관리 Component
 *
 * @extends AbstractCommonList
 * @exports Re5150Component
 */
@Component({
  selector: "app-re5150",
  templateUrl: "./re5150.component.html",
  styleUrls: ["./re5150.component.scss"],
})
export class Re5150Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of re5150 component (이익수수료 관리).
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
