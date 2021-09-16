import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 시뮬레이션정보 Claim 등록 Component
 *
 * @extends AbstractCommonList
 * @exports Re5320Component
 */
@Component({
  selector: "app-re5320",
  templateUrl: "./re5320.component.html",
  styleUrls: ["./re5320.component.scss"],
})
export class Re5320Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of re5320 component (시뮬레이션정보 Claim 등록).
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
