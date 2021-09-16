import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 복원보험료 관리 Component
 *
 * @extends AbstractCommonList
 * @exports Re5140Component
 */
@Component({
  selector: "app-re5140",
  templateUrl: "./re5140.component.html",
  styleUrls: ["./re5140.component.scss"],
})
export class Re5140Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of re5140 component (복원보험료 관리).
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
