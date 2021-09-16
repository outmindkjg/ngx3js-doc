import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 시뮬레이션정보 재보험옵션 관리 Component
 *
 * @extends AbstractCommonList
 * @exports Re5340Component
 */
@Component({
  selector: "app-re5340",
  templateUrl: "./re5340.component.html",
  styleUrls: ["./re5340.component.scss"],
})
export class Re5340Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of re5340 component (시뮬레이션정보 재보험옵션 관리).
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
