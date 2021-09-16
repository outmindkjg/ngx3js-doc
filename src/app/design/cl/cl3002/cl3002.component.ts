import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 보상업무 업체 평가정보 목록 (업체평가 관리) Component
 *
 * @extends AbstractCommonList
 * @exports Cl3002Component
 */
@Component({
  selector: "app-cl3002",
  templateUrl: "./cl3002.component.html",
  styleUrls: ["./cl3002.component.scss"],
})
export class Cl3002Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cl3002 component (보상업무 업체 평가정보 목록 (업체평가 관리)).
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
