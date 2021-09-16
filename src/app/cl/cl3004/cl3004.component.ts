import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * Claim 목록 조회 (Claim List) Component
 *
 * @extends AbstractCommonList
 * @exports Cl3004Component
 */
@Component({
  selector: "app-cl3004",
  templateUrl: "./cl3004.component.html",
  styleUrls: ["./cl3004.component.scss"],
})
export class Cl3004Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cl3004 component (Claim 목록 조회 (Claim List)).
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
